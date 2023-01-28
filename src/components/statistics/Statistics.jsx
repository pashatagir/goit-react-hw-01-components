import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatisticList,
  StatisticItem,
  StattisticLabel,
  StattisticValue,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => (
  <Container>
    {title && <Title>{title}</Title>}
    <StatisticList>
      {stats.map(stat => (
        <StatisticItem key={stat.id}>
          <StattisticLabel>{stat.label}</StattisticLabel>
          <StattisticValue>{stat.percentage}%</StattisticValue>
        </StatisticItem>
      ))}
    </StatisticList>
  </Container>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
