import cn from "clsx";
import Link from "next/link";
import { SVGProps } from "react";

export interface NetraLogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function Netra({ className, ...props }: NetraLogoProps) {
  return (
    <Link href='/'>
      <a>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 2648.42 665.02'
          {...props}
          className={cn(
            "cursor-pointer fill-gray-300 hover:fill-white",
            className
          )}
          width={props.width ?? 250}
          height={props.height ?? 135}
        >
          {/* <defs>
        <style>{'.cls-1{fill:#fff}'}</style>
      </defs> */}
          <g id='Layer_2' data-name='Layer 2'>
            <g id='Layer_1-2' data-name='Layer 1'>
              <path className='cls-1' d='M260.92 0h108.16v238.84H260.92z' />
              <path
                className='cls-1'
                transform='rotate(-60 130.466 225.967)'
                d='M76.38 106.54h108.16v238.84H76.38z'
              />
              <path
                className='cls-1'
                d='M260.92 426.17h108.16v238.84H260.92z'
              />
              <path
                className='cls-1'
                transform='rotate(60 130.464 439.05)'
                d='M76.38 319.63h108.16v238.84H76.38z'
              />
              <path
                className='cls-1'
                transform='rotate(-120 499.54 225.964)'
                d='M445.46 106.54h108.16v238.84H445.46z'
              />
              <path
                className='cls-1'
                transform='rotate(120 499.538 439.055)'
                d='M445.46 319.63h108.16v238.84H445.46z'
              />
              <path
                className='cls-1'
                d='M1478.09 260.86v-47.77h-334.38V451.93h334.38v-47.77h-286.61v-47.77h286.61v-47.77h-286.61v-47.76h286.61zM1860.24 213.09h-334.38v47.77h143.3v191.07h47.77V260.86h143.31v-47.77zM2457.35 255.6l133.33 196.33h57.74l-162.2-238.84h-57.74l-162.21 238.84h57.75l133.33-196.33zM1024.29 213.09V408.6L808.77 213.09h-71.09v238.84h47.77V256.42l215.51 195.51h71.1V213.09h-47.77zM2242.39 284.74a71.65 71.65 0 0 0-71.65-71.65H1908v238.84h47.77v-95.54H2066l105.31 95.54h71.1l-105.31-95.54h33.66a71.65 71.65 0 0 0 71.63-71.65Zm-286.61 23.88v-47.76h215a23.88 23.88 0 0 1 23.88 23.88 23.88 23.88 0 0 1-23.88 23.88Z'
              />
            </g>
          </g>
        </svg>
      </a>
    </Link>
  );
}
