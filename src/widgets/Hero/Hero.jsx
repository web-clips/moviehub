import './Hero.css'
import stars from '@/assets/stars.svg'

export const Hero = () => {
    return (
        <section className="hero">
            <p className="hero__badge">
                <img src={stars} alt="" />
                Найдите фильм для идеального вечера
            </p>
            <h1>Откройте Для Себя Фильмы <span>на Любой Вкус</span></h1>
        </section>
    )
}

