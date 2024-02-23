export function CardSkeletonLoader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[8px] md:grid-cols-3">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  )
}
export default function CardSkeleton() {
  return (
    <div class="p-4">
      <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <div class="p-6">
          <div className="flex gap-2 items-center">
            <div class="leading-relaxed mb-3 w-[30px] h-[30px] rounded-full animate-pulse bg-gray-400"></div>
            <div class="bg-gray-400 animate-pulse h-3 w-1/4 mb-2"></div>
          </div>
          <div class="flex items-center flex-wrap ">
            <div class="bg-primary-500/70 h-5 animate-pulse mt-2 w-full inline-flex items-center md:mb-2 lg:mb-0"></div>
          </div>
          <div class="leading-relaxed mt-3 w-full h-3 animate-pulse bg-gray-400"></div>
        </div>
      </div>
    </div>
  )
}
