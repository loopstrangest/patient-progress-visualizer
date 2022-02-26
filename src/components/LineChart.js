import { LineChart, Line, Label, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';

const LineChartDisplay = (
    {
        data,
        opacity,
        handleMouseEnter,
        handleMouseLeave,
        unixTimeTicks}) => (
    <ResponsiveContainer width="95%" height="90%" margin="auto">
        <LineChart width={400} height={100} data={data}
        animationDuration={1000}
        margin={{top:0, right:0, left:0, bottom:0}}>
        <XAxis dataKey="UnixTime" domain={['dataMin', 'dataMax']}
        scale="time" interval="preserveStartEnd"
        ticks={unixTimeTicks}
        type="number" tickFormatter={(unixTime) => moment(unixTime).format('M/D/YY')}/>
        <YAxis yAxisId="left" type="number" ticks={[0, 7, 14, 21]} domain={[0, 21]}>
        <Label
        value="GAD-7 Score" position="insideLeft" offset={15}
        angle={-90}
        />
        </YAxis>
        <YAxis yAxisId="right" orientation="right"
        type="number" ticks={[0, 9, 18, 27]} domain={[0, 27]}>
        <Label
        value="PHQ-9 Score" position="insideRight" offset={15}
        angle={-90}
        />
        </YAxis>
        <Tooltip labelFormatter={(unixTime) => moment(unixTime).format('M/D/YY')}
        contentStyle={{backgroundColor:'#f1f8f1', color:'#595c5e',
        borderColor:'#f1f8f1', borderRadius:'.4rem',
        }}/>
        <Legend
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        />
        <Line yAxisId="left" type="monotone"  dataKey="GAD-7 Score"
        stroke="#ff4511" strokeWidth={2} strokeOpacity={opacity["GAD-7 Score"]}/>
        <Line yAxisId="right" type="monotone" dataKey="PHQ-9 Score"
        stroke="#6c904d" strokeWidth={2} strokeOpacity={opacity["PHQ-9 Score"]}/>
        </LineChart>
    </ResponsiveContainer>
);



export default LineChartDisplay;