import { LineChart, Line, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';

const LineChartDisplay = ({data, opacity, handleMouseEnter, handleMouseLeave}) => (
    <ResponsiveContainer width="95%" height="100%" margin="auto">
        <LineChart width={400} height={100} data={data}
        animationDuration={1000}
        margin={{top:0, right:0, left:0, bottom:0}}>
        <XAxis dataKey="Unixtime" domain={['dataMin', 'dataMax']}
        scale="time"
        interval="preserveStartEnd" /*tickCount={0}*/
        type="number" tickFormatter={(unixTime) => moment(unixTime).format('M/D/YY')}/>
        <YAxis yAxisId="left" type="number" domain={[0, 21]}>
        <Label
        value="GAD-7 Score" position="insideLeft" offset={15}
        angle={-90} style={{ textAnchor: 'middle' }}
        />
        </YAxis>
        <YAxis yAxisId="right" orientation="right"
        type="number" domain={[0, 27]}>
        <Label
        value="PHQ-9 Score" position="insideRight" offset={15}
        angle={-90} style={{ textAnchor: 'middle' }}
        />
        </YAxis>
        <Tooltip labelFormatter={(unixTime) => moment(unixTime).format('M/D/YY')}/>
        <Legend
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        />
        <Line yAxisId="left" type="monotone"  dataKey="GAD-7 Score"
        stroke="#8884d8" strokeWidth={3} strokeOpacity={opacity["GAD-7 Score"]}/>
        <Line yAxisId="right" type="monotone" dataKey="PHQ-9 Score"
        stroke="#82ca9d" strokeWidth={3} strokeOpacity={opacity["PHQ-9 Score"]}/>
        </LineChart>
    </ResponsiveContainer>
);



export default LineChartDisplay;