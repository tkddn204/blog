import * as React from 'react'

function SvgEdit() {
  return (
    <svg
      height="1em"
      viewBox="-18 -18 577.332 577"
      width="1em"
      style={{
        userSelect: 'auto',
      }}
      fill="currentColor"
    >
      <g
        style={{
          userSelect: 'auto',
        }}
      >
        <path
          d="M473.848 3.715a12.343 12.343 0 00-8.86-3.617 12.861 12.861 0 00-8.855 3.617L277.469 182.37l-.496.504-.25.25c-.246.375-.621.75-.871 1.121 0 .125-.125.125-.125.25-.25.371-.38.625-.625.996-.13.125-.13.254-.25.375-.125.375-.247.625-.375 1 0 .125-.125.125-.125.246l-31.817 95.946a12.292 12.292 0 003 12.726 12.563 12.563 0 008.852 3.617 14.864 14.864 0 003.996-.625l95.695-31.937c.121 0 .121 0 .246-.125a4.438 4.438 0 001.121-.496.441.441 0 00.254-.13c.371-.245.871-.495 1.246-.75.371-.25.746-.624 1.121-.87.13-.121.25-.121.25-.25.125-.125.375-.25.504-.496L537.598 84.937a12.43 12.43 0 003.652-8.796c0-3.301-1.313-6.47-3.652-8.797zM291.695 214.312l35.309 35.31-52.902 17.589zm58.39 23.083l-46.163-46.16 161.066-161.07 46.16 46.16zm0 0"
          data-original="#000000"
          className="edit_svg__active-path"
          style={{
            userSelect: 'auto',
          }}
        />
        <path
          d="M444.402 233.277c-6.882.02-12.457 5.594-12.476 12.477v233.184c-.059 20.644-16.778 37.363-37.43 37.43H62.383c-20.645-.067-37.371-16.786-37.43-37.43V146.815c.059-20.644 16.785-37.367 37.43-37.43h233.176c6.894 0 12.476-5.585 12.476-12.476s-5.582-12.476-12.476-12.476H62.383C27.933 84.449.016 112.37 0 146.816v332.121c.016 34.446 27.934 62.368 62.383 62.38h332.113c34.45-.012 62.371-27.934 62.383-62.38V245.754c-.02-6.883-5.594-12.457-12.477-12.477zm0 0"
          data-original="#000000"
          className="edit_svg__active-path"
          style={{
            userSelect: 'auto',
          }}
        />
      </g>
    </svg>
  )
}

const MemoSvgEdit = React.memo(SvgEdit)
export default MemoSvgEdit
