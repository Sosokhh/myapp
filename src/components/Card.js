import './Card.css'


const Header = function ({title, subtitle}) {
    return (
        <div className="Header">
            <h2 className="Title">{title}</h2>
            <h4 className="Subtitle">{subtitle}</h4>
        </div>
    )
}

export default function Card({title, subtitle, children}) {
    return (
        <div className="Card">
          <Header title={title} subtitle={subtitle}></Header>
            <div className="Body">
                {children}
            </div>

        </div>
    )


}