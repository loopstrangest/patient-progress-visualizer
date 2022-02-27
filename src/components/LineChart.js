// Imports: dataviz library, moment, constants
import {
  LineChart,
  Line,
  Label,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
import { GAD7_SCORE, PHQ9_SCORE, UNIXTIME } from "../constants.js";

const LineChartDisplay = ({
  data,
  opacity,
  handleMouseEnter,
  handleMouseLeave,
  unixTimeTicks,
}) => (
  // Recharts' container for chart responsiveness
  <ResponsiveContainer width="95%" height="90%" margin="auto">
    <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      {/*
        X-axis always displays min and max time entries
        Unix time is required for Recharts compatibility.
        Tick formatting is done for date readability. 
        */}
      <XAxis
        dataKey={UNIXTIME}
        domain={["dataMin", "dataMax"]}
        scale="time"
        interval="preserveStartEnd"
        ticks={unixTimeTicks}
        type="number"
        tickFormatter={(unixTime) => moment(unixTime).format("M/D/YY")}
      />
      {/*
        Y-axes display manually-selected constant-interval ticks.
        Labels indicate each axis' corresponding score.
        */}
      <YAxis
        yAxisId="left"
        type="number"
        ticks={[0, 7, 14, 21]}
        domain={[0, 21]}
      >
        <Label
          value={GAD7_SCORE}
          position="insideLeft"
          offset={15}
          angle={-90}
        />
      </YAxis>
      <YAxis
        yAxisId="right"
        orientation="right"
        type="number"
        ticks={[0, 9, 18, 27]}
        domain={[0, 27]}
      >
        <Label
          value={PHQ9_SCORE}
          position="insideRight"
          offset={15}
          angle={-90}
        />
      </YAxis>
      {/*
        Tooltip with custom formatting.
        Displays both scores for a given date on mouse hover.
        */}
      <Tooltip
        labelFormatter={(unixTime) => moment(unixTime).format("M/D/YY")}
        contentStyle={{
          backgroundColor: "#f1f8f1",
          color: "#595c5e",
          borderColor: "#f1f8f1",
          borderRadius: ".4rem",
        }}
      />
      {/* Legend to label each score and and highlight one on mouse hover */}
      <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      {/* Lines to display the progress of each score */}
      <Line
        yAxisId="left"
        type="monotone"
        dataKey={GAD7_SCORE}
        stroke="#ff4511"
        strokeWidth={2}
        strokeOpacity={opacity[[GAD7_SCORE]]}
      />
      <Line
        yAxisId="right"
        type="monotone"
        dataKey={PHQ9_SCORE}
        stroke="#6c904d"
        strokeWidth={2}
        strokeOpacity={opacity[[PHQ9_SCORE]]}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartDisplay;
