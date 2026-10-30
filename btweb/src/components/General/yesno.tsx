import { Tag } from 'antd';

export const DisplayYesNoBoolean = ({ flag }) =>
  flag ? <Tag color="success">Yes</Tag> : <Tag color="volcano">No</Tag>;
