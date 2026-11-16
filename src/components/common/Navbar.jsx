import {
  Bookmark,
  Calendar,
  Compass,
  Menu,
  PlusCircle,
  Search,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <div className="sticky top-0 z-40 w-full bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#EBE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18">
        <div className="flex gap-4">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-[#E65100] to-[#FF8A65] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-[#111] leading-tight">
                EventSphere
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-stone-500">
                Curated Conclaves
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/explore"
              className="px-3.5 py-2 text-sm font-medium rounded-xl transition-colors inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:bg-black/3"
            >
              <Compass className="w-4 h-4" />
              <span>Explore</span>
            </Link>

            <Link
              to="/schedule"
              className="px-3.5 py-2 text-sm font-medium rounded-xl transition-colors inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:bg-black/3"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule</span>
            </Link>

            <Link
              to="/favorites"
              className="px-3.5 py-2 text-sm font-medium rounded-xl transition-colors inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:bg-black/3"
            >
              <Bookmark className="w-4 h-4" />
              <span>Saved</span>
            </Link>

            <Link
              to="/profile"
              className="px-3.5 py-2 text-sm font-medium rounded-xl transition-colors inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:bg-black/3"
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3 flex-1 max-w-sm mx-6 relative">
          <form action="" className="w-full relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search categories, events, venues..."
              className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-white border border-[#DDD9CE] focus:border-[#E65100] focus:ring-2 focus:ring-[#E65100]/20 text-[#222] placeholder-stone-400 outline-none transition-all shadow-xs"
            />
          </form>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-dashed hover:border-[#E65100] hover:text-[#E65100]"
          >
            <Link to="/create-event">
              <PlusCircle className="w-4 h-4" />
              <span>Host Event</span>
            </Link>
          </Button>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-stone-100 text-stone-600 border border-[#DDD9CE] select-none shadow-xs">
              Coming Soon
            </span>
          </div>
        </div>

        <div className="flex items-center md:hidden gap-2">
          <Link to="/explore">
            <button className="p-2 rounded-xl text-stone-700 hover:bg-black/5">
              <Search className="w-5 h-5" />
            </button>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-xl text-stone-700 hover:bg-black/5"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#EBE8DF] bg-[#FAF9F5] px-4 pt-3 pb-6 space-y-4">
          <form action="" className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search events, cities..."
              className="w-full pl-9 pr-4 py-2 text-sm rounded-xl bg-white border border-[#DDD9CE] outline-none"
            />
          </form>

          <div className="flex flex-col gap-1">
            <Link
              to="/explore"
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-stone-800 hover:bg-black/5"
            >
              <div className="flex items-center gap-3">
                <Compass className="w-4 h-4 text-stone-500" /> Explore Events
              </div>
            </Link>

            <Link
              to="/schedule"
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-stone-800 hover:bg-black/5"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-stone-500" /> My Schedule
              </div>
            </Link>

            <Link
              to="/favorites"
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-stone-800 hover:bg-black/5"
            >
              <div className="flex items-center gap-3">
                <Bookmark className="w-4 h-4 text-stone-500" /> Saved Events
              </div>
            </Link>

            <Link
              to="/profile"
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-stone-800 hover:bg-black/5"
            >
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-stone-500" /> Member Profile
              </div>
            </Link>

            <Link
              to="/create-event"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#E65100] hover:bg-orange-50"
            >
              <PlusCircle className="w-4 h-4" /> Host an Event
            </Link>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <div className="w-full py-2.5 px-4 text-xs font-semibold rounded-xl bg-stone-100 text-stone-600 border border-[#DDD9CE] text-center select-none shadow-xs">
              Sign In & Sign Up — Coming Soon
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;