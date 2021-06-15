import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as MostlyFlatIcon } from '../../../assets/icons/filters-icons/mostly-flat-icon.svg';
import { ReactComponent as GravelIcon } from '../../../assets/icons/filters-icons/gravel-icon.svg';
import { ReactComponent as RollingHillsIcon } from '../../../assets/icons/filters-icons/rolling-hills-icon.svg';
import { ReactComponent as KillerKlimbIcon } from '../../../assets/icons/filters-icons/killer-klimb-icon.svg';
import { ReactComponent as CasualIcon } from '../../../assets/icons/filters-icons/casual-icon.svg';
import { ReactComponent as TempoIcon } from '../../../assets/icons/filters-icons/tempo-icon.svg';
import { ReactComponent as RaceIcon } from '../../../assets/icons/filters-icons/race-icon.svg';

export default function FilterIcon({ icon, isActive }) {
  const iconColor = isActive ? 'var(--accent-color_light-blue)' : 'var(--font-color-main)';
  return (
    <>
      {icon === 'mostlyFlatIcon' && <MostlyFlatIcon
        fill={iconColor}
      />}
      {icon === 'gravelIcon' && <GravelIcon
        fill={iconColor}
      />}
      {icon === 'rollingHillsIcon' && <RollingHillsIcon
        fill={iconColor}
      />}
      {icon === 'killerKlimbIcon' && <KillerKlimbIcon
        fill={iconColor}
      />}
      {icon === 'casualIcon' && <CasualIcon
        fill={iconColor}
      />}
      {icon === 'tempoIcon' && <TempoIcon
        fill={iconColor}
      />}
      {icon === 'raceIcon' && <RaceIcon
        fill={iconColor}
      />}
    </>
  );
}

FilterIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
