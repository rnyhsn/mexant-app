import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"

const FrontendLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Header />    
        {children}
      <Footer />
    </div>
  )
}

export default FrontendLayout
