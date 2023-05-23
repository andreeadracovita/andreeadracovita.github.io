import photo from '../assets/Photo.png';

function Home() {
    return (
        <div>
            <div className="container justify-content-center d-flex flex-row mt-5 mb-5">
                <div className="home-description">
                    <h1 className="home-title">Software</h1>
                    <h1 className="home-title">developer<span className="home-dot">.</span></h1>
                    <p className="mt-4 h5">I like to create solid and scalable software with great user experience.</p>
                </div>
                <img src={photo} alt="" width="300" height="300" className="clip-circle"/>
            </div>
            <hr />
        </div>
    )
}
export default Home;