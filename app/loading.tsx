import { LoaderGooeyBlobs } from '@/components/ui'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black select-none">
      <LoaderGooeyBlobs size={24} color="#FFFFFF" duration={1.2} />
    </div>
  )
}
