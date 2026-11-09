
import { Button } from '@/components/ui/button'
import { Compass, Home } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

function NotFound() {
  return (
     <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl border border-[#EBE8DF] p-8 text-center space-y-5 shadow-subtle">
        <div className="text-6xl font-black text-stone-300 font-mono">404</div>
        <div className="space-y-1.5">
          <h2 className="text-xl font-bold text-stone-900">Experience Not Found</h2>
          <p className="text-xs text-stone-500">
            The page you're searching for might have concluded or moved to a new route.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 pt-2">
          <Link to="/">
            <Button variant="secondary" size="md">
              <Home className="w-4 h-4" /> Home
            </Button>
          </Link>
          <Link to="/explore">
            <Button variant="primary" size="md">
              <Compass className="w-4 h-4" /> Browse Gatherings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound