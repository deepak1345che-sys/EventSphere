import { getDays } from "@/lib/utils";
import { MessageSquare, Star } from "lucide-react";

export default function EventReviewSection({ reviews, averageRating, numReviews }) {
    const isAuthenticated = false;
    return (
        <section className="bg-white rounded-3xl border border-[#EBE8DF] p-6 sm:p-8 shadow-subtle space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F2EFE8]">
                <div>
                    <h3 className="text-xl font-bold text-[#111]">Attendee Reviews & Experiences</h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                        Real feedback from community members who joined this event
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-[#E65100]">
                        <Star className="w-5 h-5 fill-[#E65100]" />
                        <span className="text-lg font-black text-stone-900">
                            {averageRating === 0 ? "New" : averageRating}
                        </span>
                    </div>
                    <span className="text-xs text-stone-400 font-medium">
                        ({numReviews} reviews)
                    </span>
                </div>
            </div>

            {/* Review Submission Form */}
            {isAuthenticated ?
                (
                    <form className="bg-[#FAF9F5] rounded-2xl p-4 sm:p-5 border border-[#EAE7DC] space-y-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <span className="text-xs font-bold text-stone-800">Rate your experience:</span>
                            <div className="flex items-center gap-1">
                                <span className="text-amber-500 text-base cursor-pointer">⭐</span>
                                <span className="text-amber-500 text-base cursor-pointer">⭐</span>
                                <span className="text-amber-500 text-base cursor-pointer">⭐</span>
                                <span className="text-amber-500 text-base cursor-pointer">⭐</span>
                                <span className="text-amber-500 text-base cursor-pointer">⭐</span>
                                <span className="text-xs font-bold text-stone-700 ml-1.5">
                                    5 / 5
                                </span>
                            </div>
                        </div>

                        <textarea
                            rows={3}
                            name="comment"
                            placeholder="Share how the venue, speakers, curation, or atmosphere resonated with you..."
                            className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-[#DDD9CE] focus:border-[#E65100] outline-none text-stone-800"
                        />

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-xs font-medium px-3 py-1.5 bg-[#E65100] text-white hover:bg-[#D84315] shadow-sm"
                            >
                                <span>✉️</span>
                                <span>Post Review</span>
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="bg-[#FAF9F5] rounded-2xl p-4 border border-[#EAE7DC] text-center text-xs text-stone-600">
                        Want to share your review? Please
                        <span className="text-[#E65100] font-semibold"> sign in</span> to post
                        your feedback.
                    </div>
                )}

            {/* Reviews List */}
            <div className="space-y-4">
                {reviews.length === 0 ? (<div className="text-center py-8 text-stone-500 space-y-2">
                    <MessageSquare className="w-8 h-8 text-stone-300 mx-auto" />
                    <p className="text-sm font-medium">No reviews written yet</p>
                    <p className="text-xs text-stone-400">
                        Be the first to share your thoughts!
                    </p>
                </div>) : (
                    reviews.map((rev) => {
                        return (
                            <div key={rev.id || rev._id} className="p-4 rounded-2xl bg-white border border-[#F0ECE2] space-y-2.5">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <img
                                            src={rev.user?.avatar}
                                            alt={rev.user?.name}
                                            className="w-7 h-7 rounded-full object-cover border border-[#DDD9CE]"
                                        />
                                        <div>
                                            <p className="text-xs font-bold text-stone-900 leading-none">
                                                Pooja Sharma
                                            </p>
                                            <p className="text-[10px] text-stone-400 mt-0.5">
                                                {getDays(rev.createdAt)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-0.5 text-xs">
                                        {
                                            [...Array(Number(5))].map((_, i) => {
                                                return <Star key={i} className={`w-4 h-4 ${rev.rating > i ? `text-amber-400 fill-amber-400` : `text-stone-200`}`} />
                                            })
                                        }

                                    </div>
                                </div>

                                <p className="text-xs text-stone-700 leading-relaxed pl-9">
                                    {rev.comment}
                                </p>
                            </div>
                        )
                    }))
                }

            </div>
        </section>
    );
}