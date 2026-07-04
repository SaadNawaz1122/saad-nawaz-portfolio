function GlassCard({children}){

return(

<div

className="

backdrop-blur-xl

bg-white/5

border

border-white/10

rounded-3xl

p-8

shadow-xl

hover:border-cyan-400

transition-all

duration-500

"

>

{children}

</div>

)

}

export default GlassCard;