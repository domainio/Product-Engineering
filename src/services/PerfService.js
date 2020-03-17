import PerfProvider from '../infra/PerfProvider';

const trace = (traceName) => {
  return PerfProvider.trace(traceName);
};

export default {
  trace,
}