import React from 'react'

type Props = { children: React.ReactNode}

export default function DashBoardLayout({children}: Props) {
  return (
   <section>
     {/* Include shared UI here e.g. a header or sidebar */}
     <nav style={{backgroundColor:"#BBB", opacity:0.4}}><h3 style={{color:"red"}}>Hello</h3></nav>
     {children}
   </section>
  )
}
