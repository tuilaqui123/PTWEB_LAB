import data from "./data.json";
import './Tabs.css';
import { useState } from "react";
const Tabs = () => {
    const [company, setCompany] = useState("TOMMY");
    const [companyHover, setCompanyHover] = useState("");
    const handleClick = (company) => {
        setCompany(company);
    }
    const handleHover = (company) => {
        setCompanyHover(company)
    }
    return (
        <div className="wrapper-bai6">
            <div className="containerBai6">
                <nav className="sideBar">
                    <div onClick={() => handleClick("TOMMY")} className="optionTab" onMouseEnter={() => handleHover("TOMMY")}>
                        <div className={(company === "TOMMY" || companyHover === "TOMMY") ? 'vertical-lineClick' : 'vertical-lineWhite'}></div>
                        <span className={(company === "TOMMY" || companyHover === "TOMMY") ? 'colorTextChange' : ''}>TOMMY</span>
                    </div>
                    <div onClick={() => handleClick("BIGDROP")} className="optionTab" onMouseEnter={() => handleHover("BIGDROP")}>
                        <div className={(company === "BIGDROP" || companyHover === "BIGDROP") ? 'vertical-lineClick' : 'vertical-lineWhite'}></div>
                        <span className={(company === "BIGDROP" || companyHover === "BIGDROP") ? 'colorTextChange' : ''}>BIGDROP</span>
                    </div>
                    <div onClick={() => handleClick("CUKER")} className="optionTab" onMouseEnter={() => handleHover("CUKER")}>
                        <div className={(company === "CUKER" || companyHover === "CUKER") ? 'vertical-lineClick' : 'vertical-lineWhite'}></div>
                        <span className={(company === "CUKER" || companyHover === "CUKER") ? 'colorTextChange' : ' '}>CUKER</span>
                    </div>
                </nav>
                {data
                    .filter(da => da.company === company)
                    .map(da => {
                        return (
                            <div className="contentBai6">
                                <div className="titleBai6">{da.title}</div>
                                <div className="tagCompany">{company}</div>
                                <span className="date">{da.dates}</span>
                                <div className="dutiesSection">
                                    {da.duties.map(duty => {
                                        return (
                                            <div className="duty">
                                                <div className="flex flex-row">
                                                    <svg className="text-[#10b982]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                                                    <svg className="text-[#10b982]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>

                                                </div>
                                                <div className="duties">{duty}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tabs;