import Image from "next/image";

export default function Dashboard({data}) {
    return (
        <>
            <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                <Image src={data.image} width={500} height={500}/>
                <Image src={`./images/dashboard-1.png`} width={500} height={500}/>
                <Image src={`./images/dashboard-3.png`} width={500} height={300}/>
            </div>
            <p>{data.details}</p>
        </>
    )
}