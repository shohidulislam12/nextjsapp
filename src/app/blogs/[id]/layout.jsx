export default function RootLayout({
    children,
  }) {
    return (
<div className="min-h-screen">
<h2 className="text-2xl font-semibold  ">Blog Details</h2>
<div>{children}</div>
</div>
     
    )
  }