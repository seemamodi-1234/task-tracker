import Button from './button'

const Header = ({onAddingTask}) => {
  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <div onClick={onAddingTask}>
          <Button />
        </div>
    </header>
  )
}

export default Header