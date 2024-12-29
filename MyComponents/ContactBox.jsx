import './contactbox.css'
export default function ContactBox(props) {
    return (
        <>
            <main>
                <img src={props.img} alt="cat pic" />
                <section>
                    <div className="phonenumber">
                        {props.phoneNumber}
                    </div>
                    <div className="name">
                        {props.name}
                    </div>
                </section>
            </main>
        
        
        
        </>


    )
}