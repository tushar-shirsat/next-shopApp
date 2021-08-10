import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import ShopCategories from '../components/Layout/components/ShopCategries/ShopCategories.container'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <HeroSlider/>
      <ShopCategories/>
      <FeaturedProducts/>
    </div>
  )
}
