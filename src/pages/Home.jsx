import React from "react";
import Why from "../components/Why";
import Account from "../components/Account";
import First from "../assets/Group 18.png";
import Third from "../assets/Group 2.png";
import Second from "../assets/second.png";
import Shop1 from "../assets/Group 19.1.png";
import Shop2 from "../assets/Group 19.2.png";
import Shop3 from "../assets/Group 19.3.png";
import Shop4 from "../assets/Group 19.4.png";
import Shop5 from "../assets/Group 19.5.png";
import Vector from "../assets/Vector 2.png";
import Vector2 from "../assets/Vector 3.png";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Home = () => {
    return(
        <>
            <section className="container-fluid " id="home-header">
                <div className="row">
                    <div className="col-md-6 headerimg">
                    <img src={First} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 my-auto ">
                    <h2 className="text-center">Heading</h2>
                    <p className="text-justify my-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus velit autem officiis? Modi sed accusamus eligendi quidem atque, aperiam expedita iusto, eius cupiditate, vero veniam. Harum in illo molestiae sed.</p>   
                    <div className="d-flex justify-content-center">
                    <div className="btn btn-know ">Get App</div>
                    </div>
                    </div>
                </div>
            </section>



            <section className="container-fluid px-sm-5 my-5" id="seconddiv">
                <div className="row justify-content-between">
                    <div className="col-md-6 my-auto" >
                        <h2 className="text-justify">A wagon to financial research and management decisions .</h2>
                        <p className="text-justify">Life changes the moment you take a new and commited decision.</p>
                        <div className="row">
                            <div className="col-6 mx-auto">
                            <div className="card">
                            <div className="card-body">
                            <p id="inner-div">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatum repellat facilis maiores exercitationem inventore minus perspiciatis.</p>
                        <div className="col text-center">
                            <a className="btn btn-know py-0">Read more</a>
                    </div>
                    </div> 
                    </div>
                    </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={Third} alt="" className="img-fluid" />
                    </div>
                </div>
            </section>


            <section className="container-fluid px-sm-5 my-5 " id="Associate">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-12 my-5">
                    <h2 className="text-center">At 19 Million + <br/>Stores,apps,websites  more</h2>
                    </div>
                <div className="col-md-12">
                    <div className="col text-center">
                        <div className="btn btn-know my-2">Associate with  <ArrowForwardIcon/></div>
                    </div>
                </div>
                <div className="col-md-12 my-5 ">
                    <div className="row mx-auto ">
                        {/* <div className="col-md-12 justify-content-center">
                        <img src={Shop1} alt="" />
                        <img src={Shop2} alt="" />
                        <img src={Shop3} alt="" />
                        <img src={Shop4} alt="" />
                        <img src={Shop5} alt="" />
                        </div> */}
                       <div className="mx-auto">
                       <div className="col-md-2  justify-content-center"><img src={Shop1} alt="" /></div>
                       </div>
                       <div className="mx-auto">
                       <div className="col-md-2  justify-content-center Shop-margin"><img src={Shop2} alt="" /></div>
                       </div>
                       <div className="mx-auto">
                       <div className="col-md-2  justify-content-center"><img src={Shop3} alt="" /></div>
                       </div>
                       <div className="mx-auto">
                       <div className="col-md-2  justify-content-center Shop-margin"><img src={Shop4} alt="" /></div>
                       </div>
                       <div className="mx-auto">
                       <div className="col-md-2  justify-content-center"><img src={Shop5} alt="" /></div>
                       </div>
                          
                    </div>
                    {/* <img src={Forth} alt="" /> */}
                </div>
                {/* <div className="col-md-12">
                <div className="row mx-auto">
                    <div className="col-6"><div className="col-2"><img src={Shop2} alt="" /></div></div>
                    <div className="col-6"><div className="col-2"><img src={Shop4} alt="" /></div></div>
                 </div>
                </div> */}
                </div>
            </section>


            <section className="container-fluid px-sm-5 my-5" id="home-why">
                <div className="row">
                    <div className="col-12">
                    {/* <img src={Vector2} alt="" className="vectorimg" /> */}
                        
                        <h2>why us ?</h2>
                    </div>
                    <div className="row">
                        <Why/>
                    </div>

                <div className="col-12">
                    <div className="col text-center">
                        <div className="btn btn-know my-5">know more</div>
                    </div>
                    <div >
                    {/* <img src={Vector} alt="" className="vectorimg"/> */}
                    </div>
                    
                </div>
                </div>
            </section>


            <section className="container-fluid px-sm-5 my-5" id="reward">
                <div className="row">
                <div className="col-md-6 my-auto">
                        <h2>Win Reward worth Rs 1 Cr.</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={Second} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <div className="btn btn-register my-5">Register Now</div>
                    </div>
                    </div>
            </section>

{/* 
            <section className="container-fluid px-sm-5 my-5" id="home-account">
                <div className="row">
                    <div className="col">
                        <h2>how to open account ?</h2>
                        <p>It's ok please feel free to <br />contact us we'd be happy to help.</p>
                    </div>
                </div>
                <div className="row">
                    <Account />
                </div>
                <div className="row">
                    <div className="col text-center">
                        <div className="btn btn-register my-5">Register Now</div>
                    </div>
                </div>
            </section> */}
        </>
    );
}

export default Home;