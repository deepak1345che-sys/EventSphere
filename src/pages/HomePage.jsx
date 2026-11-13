import FeaturedCarousel from '@/components/FeaturedCarousel';
import { Button } from '@/components/ui/button'
import axios from 'axios';
import { Briefcase, ChevronRight, Compass, Cpu, Flame, GraduationCap, Music, Palette, Sparkles, Tag, Trophy } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function getCategoryIconComponent(category) {
    const icon = category?.icon || "";

    if (icon === "palette") {
        return Palette
    }
    if (icon === "briefcase") {
        return Briefcase
    }
    if (icon === "graduation-cap") {
        return GraduationCap
    }
    if (icon === "music") {
        return Music
    }
    if (icon === "trophy") {
        return Trophy
    }
    if (icon === "cpu") {
        return Cpu
    }

    return Tag
}

function getCategoryColor(color) {
    const colors = [
        {
            icon: "bg-orange-50 text-[#E65100] border-orange-200 group-hover:bg-[#E65100] group-hover:text-white",
            text: "group-hover:text-[#E65100]",
        },
        {
            icon: "bg-blue-50 text-blue-700 border-blue-200 group-hover:bg-blue-600 group-hover:text-white",
            text: "group-hover:text-blue-600",
        },
        {
            icon: "bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white",
            text: "group-hover:text-emerald-600",
        },
        {
            icon: "bg-purple-50 text-purple-700 border-purple-200 group-hover:bg-purple-600 group-hover:text-white",
            text: "group-hover:text-purple-600",
        },
        {
            icon: "bg-rose-50 text-rose-700 border-rose-200 group-hover:bg-rose-600 group-hover:text-white",
            text: "group-hover:text-rose-600",
        },
        {
            icon: "bg-amber-50 text-amber-700 border-amber-200 group-hover:bg-amber-600 group-hover:text-white",
            text: "group-hover:text-amber-600",
        },
    ];

    return  colors[color % colors.length]

}

function HomePage() {
    const [isLoading, setisLoading] = useState(false);
    const [featuredEvents, setFeaturedEvents] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function loadHomePage() {
            setisLoading(true)
            try {
                let { data: { data } } = await axios.get("https://eventsphere-server-mfdb.onrender.com/api/events/featured")
                console.log(data);
                setFeaturedEvents(data)
            } catch (error) { }

            try {
                let { data: { data } } = await axios.get("https://eventsphere-server-mfdb.onrender.com/api/categories")
                setCategories(data)
                console.log(data);
                setisLoading(false)
            } catch (error) { }
            setisLoading(false)
        }
        loadHomePage()
    }, [])
    return (
        <div className="space-y-16 pb-20">

            <section className="relative pt-12 pb-6 sm:pt-16 sm:pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-10 border-b border-[#EBE8DF]">
                    <div className="max-w-2xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100/70 text-[#C2410C] border border-orange-200">
                            <Sparkles className="w-3.5 h-3.5" /> India's Curated Community
                            Conclaves
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111] leading-[1.08]">
                            Extraordinary gatherings for curious minds.
                        </h1>
                        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                            Discover verified developer summits, acoustic indie evenings,
                            founder pitch conclaves, and art retreats across Bengaluru,
                            Mumbai, and Delhi NCR.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                        <Link to="/explore">
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full sm:w-auto shadow-elevated gap-2"
                            >
                                <Compass className="w-4 h-4" />
                                <span>Explore 40+ Gatherings</span>
                            </Button>
                        </Link>
                        <Link to="/create-event">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full sm:w-auto"
                            >
                                Host an Event
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center gap-2">
                        <Flame className="w-5 h-5 text-[#E65100]" />
                        <h2 className="text-xl font-bold text-stone-900 tracking-tight">
                            Curated Spotlight
                        </h2>
                    </div>
                    <Link
                        to="/explore"
                        className="text-xs font-semibold text-[#E65100] hover:underline flex items-center gap-1"
                    >
                        Browse all <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                </div>

                {isLoading ? (
                    <div className="aspect-21/9 rounded-3xl bg-[#EBE8DF]/50 animate-pulse"></div>
                ) : (
                    <FeaturedCarousel events={featuredEvents} />
                )}
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
                <div>
                    <h2 className="text-xl font-bold text-stone-900 tracking-tight">Browse by Discipline</h2>
                    <p className="text-xs text-stone-500">Curated tracks dynamically fetched from our active community listings</p>
                </div>

                {isLoading ? <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="p-4 rounded-2xl bg-white border border-[#EBE8DF] animate-pulse space-y-3"
                        >
                            <div className="w-9 h-9 rounded-xl bg-stone-100" />
                            <div className="space-y-1.5">
                                <div className="h-3.5 bg-stone-100 rounded w-3/4" />
                                <div className="h-2.5 bg-stone-100 rounded w-1/2" />
                            </div>
                        </div>
                    ))}
                </div> :

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
                        {/* Category 1 */}

                        {
                            categories.map((c, i) => {
                                const { _id, name, eventCount } = c
                                const Icon = getCategoryIconComponent(c)
                                const color = getCategoryColor(i);

                                return <Link
                                    key={_id}
                                    to="/explore"
                                    className="p-4 rounded-2xl bg-white border border-[#EBE8DF] hover:border-[#D5D0C2] hover:shadow-subtle transition-all duration-200 group flex flex-col justify-between"
                                >
                                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 transition-all duration-200 ${color?.icon}`}>
                                        <Icon />
                                    </div>
                                    <div>
                                        <p className={`text-xs font-bold text-stone-900 leading-snug group-hover:text-[#E65100] transition-colors ${color?.text}`}>
                                            {name}
                                        </p>
                                        <p className="text-[11px] text-stone-400 mt-0.5">{eventCount}</p>
                                    </div>
                                </Link>

                            })
                        }

                    </div>
                }
            </section>

        </div>
    )
}

export default HomePage