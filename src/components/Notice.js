const Notice = (props) => {
    const {data} = props;
    return (
        <marquee className="bg-info" fluid>
            <h5><b>{data.title}: </b>{data.message} - <i className="text-muted">{data.date_time}</i></h5>
        </marquee>
        
    );
}


export default Notice;