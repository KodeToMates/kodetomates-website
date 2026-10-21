#!/usr/bin/env node

/**
 * Smart Pre-Commit Checks for KodeToMates
 * Runs targeted linting, typechecking, and validations on affected staged files
 * Compatible with Git CLI, TortoiseGit, VS Code, and CI workflows.
 */

import { execSync } from 'node:child_process'
import path from 'node:path'
import fs from 'node:fs'

function runCommand(cmd, options = {}) {
  try {
    return execSync(cmd, {
      encoding: 'utf8',
      stdio: options.stdio || ['pipe', 'pipe', 'pipe'],
      ...options,
    })
  } catch (err) {
    if (options.throwOnError !== false) {
      throw err
    }
    return null
  }
}

function getBinCommand(binName) {
  const isWin = process.platform === 'win32'
  const localBin = path.resolve(
    process.cwd(),
    'node_modules',
    '.bin',
    isWin ? `${binName}.cmd` : binName
  )
  if (fs.existsSync(localBin)) {
    return `"${localBin}"`
  }
  return `npx ${binName}`
}

function getStagedFiles() {
  try {
    const stdout = runCommand('git diff --cached --name-only --diff-filter=ACMR')
    if (!stdout) return []
    return stdout
      .split(/\r?\n/)
      .map((f) => f.trim())
      .filter(Boolean)
  } catch {
    return []
  }
}

function main() {
  console.log('🏃 Running smart pre-commit checks (affected files only)...')
  console.log('🏃 Running pre-commit checks...\n')

  const stagedFiles = getStagedFiles()

  if (stagedFiles.length === 0) {
    console.log('ℹ No staged files to check. Proceeding with commit.\n')
    process.exit(0)
  }

  // Categorize files (filter out repo maintenance scripts from code linting)
  const tsJsFiles = stagedFiles.filter(
    (f) =>
      /\.(ts|tsx|js|jsx|mjs)$/i.test(f) &&
      !f.startsWith('scripts/') &&
      !f.startsWith('scripts\\')
  )
  const componentFiles = stagedFiles.filter((f) => /^components[\\/]/.test(f))
  const pageFiles = stagedFiles.filter((f) => /^(app|pages)[\\/]/.test(f))
  const serviceFiles = stagedFiles.filter((f) =>
    /^(services|lib|hooks|config|data|utils|types)[\\/]/.test(f)
  )

  // Print Changed Files Summary
  console.log('📊 Changed Files Summary:')
  console.log(`Total: ${stagedFiles.length} files`)
  console.log(`TypeScript: ${tsJsFiles.length} files`)
  console.log(`Components: ${componentFiles.length} files`)
  console.log(`Pages: ${pageFiles.length} files`)
  console.log(`Services: ${serviceFiles.length} files\n`)

  // Determine Required Checks
  const hasCodeChanges = tsJsFiles.length > 0
  const checks = [
    { name: 'eslint', required: hasCodeChanges },
    { name: 'typecheck', required: hasCodeChanges },
    { name: 'nextLint', required: false },
    { name: 'lighthouse', required: false },
    { name: 'affectedRoutes', required: false },
  ]

  console.log('🎯 Checks Required:')
  checks.forEach((c) => {
    console.log(`${c.required ? '✓' : '○'} ${c.name}`)
  })
  console.log('')

  if (!hasCodeChanges) {
    console.log('ℹ No TypeScript/JavaScript changes detected. Code checks skipped.')
    console.log('✨ All pre-commit checks passed successfully!\n')
    process.exit(0)
  }

  // Check 1: ESLint on affected files
  const eslintBin = getBinCommand('eslint')
  const BATCH_SIZE = 15
  const totalBatches = Math.ceil(tsJsFiles.length / BATCH_SIZE)

  for (let b = 0; b < totalBatches; b++) {
    const batch = tsJsFiles.slice(b * BATCH_SIZE, (b + 1) * BATCH_SIZE)
    console.log(
      `🔍 ESLint (batch ${b + 1}, ${batch.length} file${batch.length > 1 ? 's' : ''})...`
    )

    // Filter to existing files only
    const existingBatch = batch.filter((file) => fs.existsSync(file))
    if (existingBatch.length === 0) continue

    const quotedFiles = existingBatch.map((f) => `"${f.replace(/\\/g, '/')}"`).join(' ')
    const eslintCmd = `${eslintBin} --no-warn-ignored ${quotedFiles}`

    try {
      execSync(eslintCmd, {
        encoding: 'utf8',
        stdio: 'inherit',
      })
      console.log('✓ ESLint passed\n')
    } catch {
      console.error('\n❌ ESLint check failed. Please fix the linting errors above before committing.\n')
      process.exit(1)
    }
  }

  // Check 2: TypeScript typecheck
  const tscBin = getBinCommand('tsc')
  console.log('🔍 TypeScript check (tsc --noEmit)...')
  try {
    execSync(`${tscBin} --noEmit`, {
      encoding: 'utf8',
      stdio: 'inherit',
    })
    console.log('✓ typecheck passed\n')
  } catch {
    console.error('\n❌ TypeScript typecheck failed. Please fix the type errors above before committing.\n')
    process.exit(1)
  }

  console.log('✨ All pre-commit checks passed successfully!\n')
  process.exit(0)
}

main()
