import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

// This component ensures that all children inside take up full screen

// Takes children and a className as props of type ReactNode and string
const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) => {
    return (
        <div
            // using the cn util function. cn concatenates input className string + tailwind string that ensures full screen being used (mx-auto w-full........md:px-20)
            className={cn(
                'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
                className,
                // The additional attributes which can come from outside
            )}
        >
            {/* Rendering all the children from inside the component */}
            {children}
        </div>
    )
}

export default MaxWidthWrapper
