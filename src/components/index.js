import header from './home/header'; //首页header
import cardContainer from './cardContainer'; //卡片容器
import chart from './chart'; //chart容器
import timelyAlarm from './home/timelyAlarm'; //实时报警信息
import failureAnalysis from './home/failureAnalysis'; //故障原因分析
import todayAlarm from './home/todayAlarm'; //今日报警统计
import todayPatrol from './home/todayPatrol'; //今日巡检比例
import machineSummary from './home/machineSummary'; //本月设备运行时间-今日故障待办事项
import fixtimeSummary from './home/fixtimeSummary'; //月可靠度-平均每日修复时间-保修超时率
import counterSummary from './home/counterSummary'; //当月各站故障次数-当月人员工作量
import loginHeader from './loginHeader';
import loginFooter from './loginFooter';
import search from './search';
import searchList from './searchList';

export default {
  header,
  cardContainer,
  chart,
  timelyAlarm,
  failureAnalysis,
  todayAlarm,
  todayPatrol,
  machineSummary,
  fixtimeSummary,
  counterSummary,
  loginHeader,
  loginFooter,
  search,
  searchList
};
