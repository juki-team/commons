import { ClassState } from '../types';

export const CLASS_STATE: { [key in ClassState]: { value: ClassState, label: string, description: string } } = {
  [ClassState.RELEASED]: {
    value: ClassState.RELEASED,
    label: 'released',
    description: 'the class will be released',
  },
  [ClassState.ARCHIVED]: {
    value: ClassState.ARCHIVED,
    label: 'archived',
    description: 'the class will not appear for anyone, contact the administrator to see it again',
  },
};
