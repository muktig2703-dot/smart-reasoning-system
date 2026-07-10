import SkeletonCard from "./SkeletonCard";

export default function SkeletonResults() {
    return (
        <div className="mt-12 space-y-10">

            <SkeletonCard lines={5} />

            <SkeletonCard lines={6} />

            <SkeletonCard lines={8} />

            <SkeletonCard lines={5} />

        </div>
    );
}