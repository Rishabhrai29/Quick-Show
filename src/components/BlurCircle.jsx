const BlurCircle = ({top = "auto" , left="auto" , right="auto" , bottom="auto"}) => {
  return (
    <div className="absolute -z-50 h-58 w-59 aspect-squarerounded-full 
    bg-primary/30 blur-3xl" 
    style={{top: top, left:left , right:right , bottom:bottom }}>
         
    </div>
  )
}

export default BlurCircle