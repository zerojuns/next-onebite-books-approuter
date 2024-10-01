export default function Page({
    params,
}:{
    params :{
        id:string | string[]
    };
}){
    return <div>book/[id] {params.id} 페이지</div>
}