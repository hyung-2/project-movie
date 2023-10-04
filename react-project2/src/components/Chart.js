import { Bar } from 'react-chartjs-2'

function Chart( dataArr ){
    const labelData = dataArr.map((genre) => {
        if(genre.id !== 0){
           return genre.name 
        }
    })
    const likesData = dataArr.map((genre) => {
        if(genre.id !== 0){
            return genre.likes
        }
    })

    const data = {
        labels: labelData,
        datasets: {
            label: "해당 장르를 선택한 사용자 수",
            data: likesData
        }
    }
    return (
        <div className='chart-container'>
            <Bar type="bar"/>
        </div>
    )
}

export default Chart