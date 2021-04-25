import React from 'react'
import styles from './TagsList.module.scss'
import Tag from '../../ui/Tag/Tag'

interface ITagListProps {
  tags: Array<React.ReactNode>
}

const TagsList: React.FC<ITagListProps> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </div>
  )
}

export default TagsList
