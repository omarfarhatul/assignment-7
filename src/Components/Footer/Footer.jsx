const Footer = ({ coins }) => {
    return (
        <div>
            <footer className=" rounded-tl-2xl rounded-tr-2xl bg-black text-white p-10">
                <div className="w-20 mx-auto lg:w-30 mt-30">
                    <img src={coins[0].footer_logo} alt="" />
                </div>
                <div className=" mt-10 mb-10 grid grid-cols-2  gap-10 md:flex md:justify-between">
                    <nav className=" text-sm w-30 lg:w-90 text-justify">
                        <h6 className="footer-title text-xl">About Us</h6>
                        <p>Assemble My Ultimate Dream 11 Cricket Team lets you build your fantasy squad with top Bangladeshi cricketers. Choose players, manage coins, and compete using real stats. Experience the thrill of strategy, passion, and cricket—all in one place!</p>
                    </nav>
                    <nav className="text-sm w-30 lg:w-90 text-justify">
                        <h6 className="footer-title text-xl">Our Goal</h6>
                        <p>
                        To bring fans closer to the action by letting them experience team-building through the lens of data, strategy, and love for Bangladeshi cricket.
                        Let the game begin – build your dream team now and compete with passion!
                         </p>
                    </nav>
                    <fieldset className="w-80 text-sm">
                    <h6 className="footer-title text-xl">Subscribe</h6>
                        <label>Subscribe to our newsletter for the latest updates.</label>
                        <div className="join mt-2">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered rounded-l-xl bg-cyan-100 join-item text-black p-2" />
                            <button className="btn text-black bg-green-200 hover:bg-green-500 border-2 border-b-emerald-400 join-item p-2 rounded-r-xl">Subscribe</button>
                        </div>
                    </fieldset>
                </div>
                <div className="text-center font-black">
                    <small> <p>Copyright © {new Date().getFullYear()} - All right reserved by Bd Cricket</p></small>
                </div>
            </footer>
        </div>
    );
};

export default Footer;