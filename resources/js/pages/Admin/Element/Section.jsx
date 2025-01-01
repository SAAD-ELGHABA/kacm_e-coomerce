import React, { useRef, useState } from "react";
import { FaImage, FaList, FaListUl } from "react-icons/fa";
import "./../style.css";

function Section({handleDataTable}) {
    const [images, setImages] = useState({
        firstImage: null,
        secondImage: null,  
    });
    const [listeToggle, setListToggle] = useState({
        titleList: false,
        textList: false,
        buttonList: false,
    });
    const [titleStyle, setTitleStyle] = useState({
        titleData: "Title",
        fontFamily: "",
        fontSize: "24",
        color: "",
        fontWeight: "",
    });
    const [ButtonStyle, setButtonStyle] = useState({
        textButton:'Button',
        fontFamily: "",
        width: "25",
        Textcolor: "",
        BackgroudColor: "",
        BorderColor: "",
        target: "",
    });
    const [TextStyle, setTextStyle] = useState({
        textData: "some text ..",
        fontFamily: "",
        fontSize: "15",
        color: "",
        fontWeight: "",
    });
    const secondImage = useRef(null);
    const FirstImage = useRef(null);
    const [secondImageUrl, setSecondImageUrl] = useState(null);
    const [FirstImageUrl, setFirstImageUrl] = useState(null);
    function handleSecondImage(e){
        const Image = e.target.files[0]; 
        setImages({...images,secondImage:Image});
        if(Image){
            const reader = new FileReader();
            reader.onloadend = () =>{
                setSecondImageUrl(reader.result);
            }
            reader.readAsDataURL(Image);
        }
        console.log(secondImageUrl);
        
    }
    function handleFirstImage(e){
        const Image = e.target.files[0]; 
        setImages({...images,firstImage:Image});
        if(Image){
            const reader = new FileReader();
            reader.onloadend = () =>{
                setFirstImageUrl(reader.result);
            }
            reader.readAsDataURL(Image);
        }
    } 
    function handleSaveElement(e){
        e.preventDefault();
        const elementJson = {
            element:'section',
            dependencies:{
                firstImage:images.firstImage?images.firstImage:'firstImage',
                secondImage:images.secondImage?images.secondImage:'secondImage',
                titleStyle,
                TextStyle,
                ButtonStyle
            }
        }
        handleDataTable(elementJson);

        
    }
    return (
        <div
            className="w-100 text-center  my-1 border border-secondary rounded d-flex justify-content-center align-items-center position-relative"
            style={{ height: "500px" }}
            id="section-element"
        >
            <div onClick={()=>FirstImage.current.click()} style={{cursor:'pointer',backgroundImage:`url(${FirstImageUrl})`,backgroundPosition:'center',backgroundSize:'cover'}} className="w-100 h-100 position-absolute d-flex justify-content-center align-items-center elementHoverd" >
                <FaImage className="fs-1" style={{cursor:'pointer',zIndex:'99'}}/>
                <input type="file" name="" id="" style={{display:'none'}} ref={FirstImage} onChange={(e)=>handleFirstImage(e)}/>
            </div>
            <div className="position-absolute w-100">
                <div className="row d-flex justify-content-between mx-5 align-items-end">
                    <div className="col-4 "  style={{ height: "250px" }}>
                        <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                            <input
                                type="text"
                                placeholder="Title "
                                className="inputs bg-transparent border-transparent outline-none border-none w-100 ps-2"
                                style={{fontFamily:titleStyle.fontFamily,fontSize:`${titleStyle.fontSize}px`,color:titleStyle.color,fontWeight:titleStyle.fontWeight}}
                                value={titleStyle.titleData}
                                onChange={(e) =>setTitleStyle({...titleStyle,titleData:e.target.value})}
                            />
                            <FaListUl
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setListToggle({
                                        ...listeToggle,
                                        titleList: !listeToggle.titleList,
                                    })
                                }
                            />
                            {listeToggle.titleList && (
                                <div className=" " style={{zIndex:'99'}} >
                                    <ul
                                        className=" border border-secondary rounded list-group position-absolute"
                                        style={{
                                            width: "200px",
                                            fontSize: "14px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        <li className="list-group-item ">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="font familly "
                                                className="inputs"
                                                value={titleStyle.fontFamily?titleStyle.fontFamily:''}
                                                onChange={(e) =>setTitleStyle({...titleStyle,fontFamily:e.target.value})}
                                            />
                                        </li>
                                        <li className="list-group-item ">
                                            <input
                                                type="number"
                                                name=""
                                                id=""
                                                placeholder="font size "
                                                className="inputs"
                                                value={titleStyle.fontSize?titleStyle.fontSize:''}
                                                onChange={(e) =>setTitleStyle({...titleStyle,fontSize:e.target.value})}
                                            />
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            title's color :
                                            <input type="color" onChange={(e) =>setTitleStyle({...titleStyle,color:e.target.value})} value={titleStyle.color?titleStyle.color:''}/>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            Font bold :
                                            <select
                                                name=""
                                                id=""
                                                className="border-none inputs"
                                                value={titleStyle.fontWeight?titleStyle.fontWeight:''}
                                                onChange={(e) =>setTitleStyle({...titleStyle,fontWeight:e.target.value})}
                                            >
                                                                      <option value="300" >
                                                                        thin
                                                                    </option>
                                                                    <option value="500">
                                                                        medium
                                                                    </option>
                                                                    <option value="700">
                                                                        semibold
                                                                    </option>
                                                                    <option value="900" >
                                                                        bold
                                                                    </option>
                                            </select>
                                        </li>

                                        <li className="list-group-item ">
                                            <button className="btn btn-success w-100" onClick={(e)=>{e.preventDefault();setListToggle({...listeToggle,titleList:false})}}>
                                                save changes
                                            </button>
                                        </li>
                                        <li className="list-group-item ">
                                            <button className="btn btn-warning w-100" onClick={(e)=>{e.preventDefault(),setTitleStyle({fontFamily:'',fontSize:'24',color:'',fontWeight:''})}}>
                                                reset changes
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="d-flex justify-content-between align-items-center gap-2 h-50 mb-2">
                            <textarea
                                name=""
                                id=""
                                placeholder="some text .."
                                className="bg-transparent border-none outline-none w-100 h-100 inputs ps-2"
                                style={{fontFamily:TextStyle.fontFamily,fontSize:`${TextStyle.fontSize}px`,color:TextStyle.color,fontWeight:TextStyle.fontWeight}}
                                value={TextStyle.textData}
                                onChange={(e) =>setTextStyle({...TextStyle,textData:e.target.value})}
                            ></textarea>
                            <FaListUl
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setListToggle({
                                        ...listeToggle,
                                        textList: !listeToggle.textList,
                                    })
                                }
                            />
                            {listeToggle.textList && (
                                <div className="" style={{zIndex:'99'}}>
                                  <ul 
                                        className=" border border-secondary rounded list-group position-absolute"
                                        style={{
                                            width: "200px",
                                            fontSize: "14px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        <li className="list-group-item ">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="font familly "
                                                className="inputs"
                                                value={TextStyle.fontFamily?TextStyle.fontFamily:''}
                                                onChange={(e) =>setTextStyle({...TextStyle,fontFamily:e.target.value})}
                                            />
                                        </li>
                                        <li className="list-group-item ">
                                            <input
                                                type="number"
                                                name=""
                                                id=""
                                                placeholder="font size "
                                                className="inputs"
                                                value={TextStyle.fontSize?TextStyle.fontSize:''}
                                                onChange={(e) =>setTextStyle({...TextStyle,fontSize:e.target.value})}
                                            />
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            text's color :
                                            <input type="color" onChange={(e) =>setTextStyle({...TextStyle,color:e.target.value})} value={TextStyle.color?TextStyle.color:''}/>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            Font bold :
                                            <select
                                                name=""
                                                id=""
                                                className="border-none inputs"
                                                value={TextStyle.fontWeight?TextStyle.fontWeight:''}
                                                onChange={(e) =>setTextStyle({...TextStyle,fontWeight:e.target.value})}
                                            >
                                                                      <option value="300" >
                                                                        thin
                                                                    </option>
                                                                    <option value="500">
                                                                        medium
                                                                    </option>
                                                                    <option value="700">
                                                                        semibold
                                                                    </option>
                                                                    <option value="900" >
                                                                        bold
                                                                    </option>
                                            </select>
                                        </li>

                                        <li className="list-group-item ">
                                            <button className="btn btn-success w-100" onClick={(e)=>{e.preventDefault();setListToggle({...listeToggle,textList:false})}}>
                                                save changes
                                            </button>
                                        </li>
                                        <li className="list-group-item ">
                                            <button className="btn btn-warning w-100" onClick={(e)=>{e.preventDefault(),setTextStyle({fontFamily:'',fontSize:'15',color:'',fontWeight:''})}}>
                                                reset changes
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="w-100 d-flex justify-content-start align-items-center gap-2">
                            <button className={`btn w-${ButtonStyle.width}`} style={{fontFamily:`${ButtonStyle.fontFamily}`,backgroundColor:ButtonStyle.BackgroudColor,color:ButtonStyle.Textcolor,border:`1px solid ${ButtonStyle.BorderColor}`}}>{ButtonStyle.textButton}</button>
                            <FaListUl
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setListToggle({
                                        ...listeToggle,
                                        buttonList: !listeToggle.buttonList,
                                    })
                                }
                            />
                        </div>
                        {listeToggle.buttonList && (
                            <div className="" style={{zIndex:'999'}}>
                            <ul
                                className=" border border-secondary rounded list-group position-absolute"
                                style={{
                                    width: "200px",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                }}
                            >
                                <li className="list-group-item">
                                    <input
                                        type="text"
                                        placeholder="button's text "
                                        className="inputs w-100 "
                                        value={ButtonStyle.textButton?ButtonStyle.textButton:''}
                                        onChange={(e)=>setButtonStyle({...ButtonStyle,textButton:e.target.value})}
                                    />
                                </li>
                                <li className="list-group-item ">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="font familly "
                                        className="inputs"
                                        value={ButtonStyle.fontFamily?ButtonStyle.fontFamily:''}
                                        onChange={(e)=>setButtonStyle({...ButtonStyle,fontFamily:e.target.value})}
                                    />
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    button's with :
                                    <select name="" id="" className="inputs" onChange={(e)=>setButtonStyle({...ButtonStyle,width:e.target.value})} value={ButtonStyle.width?ButtonStyle.width:''}>
                                        <option value="25">25%</option>
                                        <option value="50">50%</option>
                                        <option value="75">75%</option>
                                        <option value="100">100%</option>
                                    </select>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    Background color :
                                    <input type="color" onChange={(e)=>setButtonStyle({...ButtonStyle,BackgroudColor:e.target.value})} value={ButtonStyle.BackgroudColor?ButtonStyle.BackgroudColor:''}/>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    Text color :
                                    <input type="color" onChange={(e)=>setButtonStyle({...ButtonStyle,Textcolor:e.target.value})} value={ButtonStyle.Textcolor?ButtonStyle.Textcolor:''}/>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    Border color :
                                    <input type="color" onChange={(e)=>setButtonStyle({...ButtonStyle,BorderColor:e.target.value})} value={ButtonStyle.BorderColor?ButtonStyle.BorderColor:''}/>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    Target :
                                    <select
                                        name=""
                                        id=""
                                        className="border-none inputs"
                                        value={ButtonStyle.target?ButtonStyle.target:''}
                                        onChange={(e)=>setButtonStyle({...ButtonStyle,target:e.target.value})}
                                    >
                                        <option value="/">Home</option>
                                        <option value="/Store">Store</option>
                                        <option value="/Contact">contact</option>
                                    </select>
                                </li>

                                <li className="list-group-item ">
                                    <button className="btn btn-success w-100" onClick={(e)=>{e.preventDefault();setListToggle({...listeToggle,buttonList:false})}}>
                                        save changes
                                    </button>
                                </li>
                                <li className="list-group-item ">
                                    <button className="btn btn-warning w-100" onClick={(e)=>{e.preventDefault(),setButtonStyle({textButton:'Button',fontFamily:'',width:'25',Textcolor:'',BackgroudColor:'',BorderColor:'',target:''})}}>
                                        reset changes
                                    </button>
                                </li>
                            </ul>
                            </div>
                        )}
                    </div>
                    <div
                        className="col-4  d-flex justify-content-center align-items-center "
                        style={{ borderRadius: "45%", height: "500px",cursor:'pointer',overflow:'hidden' }}
                        id="SecondImageSection"
                        onClick={()=>{secondImage.current.click()}}

                    >
                        <img
                        style={{display:secondImageUrl?'block':'none'}}
                            src={secondImageUrl}
                            alt="test"
                            className="w-100"
                            />
                        <input type="file" name="" id="" style={{display:'none'}} ref={secondImage} onChange={(e)=>handleSecondImage(e)}/>
                        <FaImage style={{display:secondImageUrl?'none':'block'}}/>
                    </div>
                </div>
            </div>
        <div className="w-50 position-absolute d-flex justify-content-center align-items-end  bottom-0 py-1" >
            <button className="btn btn-success" onClick={handleSaveElement}>save all changes</button>
        </div>
        
        </div>
    );
}

export default Section;
