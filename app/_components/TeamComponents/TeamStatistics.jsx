import PeopleGroupIcon from "../../_assets/svgs/PeopleGroup"
import Spinner from "../../_assets/svgs/Spinner"
import WatchIcon from "../../_assets/svgs/WatchIcon"
import StatisticsCard from "../../_components/AppComps/StatisticsCard"
import StatisticsCardSkeleton from "../../_components/Skeletons/StatisticsCardSkeleton"

function StaffList({
  totalCountOfActiveEmployees,
  totalNumberOfWorkedHours,
  loading,
  loadingStats,
}) {
  return (
    <>
      <div className="text-[#252525] grid grid-cols-1 gap-4 md:grid-cols-2">
        {loading && (
          <>
            <StatisticsCardSkeleton mainBg="#FFEECC" iconBg="#FFDD99" />
            <StatisticsCardSkeleton mainBg="#FFEECC" iconBg="#FFDD99" />
          </>
        )}
        {!loading && (
          <>
            <StatisticsCard
              title={totalCountOfActiveEmployees}
              text="Total number of active employees"
              icon={<PeopleGroupIcon />}
              mainBg="#FFEECC"
              iconBg="#FFDD99"
            />
            <StatisticsCard
              title={
                loadingStats ? (
                  <Spinner />
                ) : (
                  totalNumberOfWorkedHours?.toLocaleString()
                )
              }
              text="Total number of worked hours"
              icon={<WatchIcon />}
              mainBg="#FFEECC"
              iconBg="#FFDD99"
            />
          </>
        )}
      </div>
    </>
  )
}

export default StaffList
