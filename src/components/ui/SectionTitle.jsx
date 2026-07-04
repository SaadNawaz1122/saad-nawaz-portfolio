function SectionTitle({title,subtitle}){

return(

<div className="text-center mb-20">

<h2

className="

text-5xl

font-bold

bg-gradient-to-r

from-cyan-400

to-purple-500

bg-clip-text

text-transparent

"

>

{title}

</h2>

<p className="text-slate-400 mt-4">

{subtitle}

</p>

</div>

)

}

export default SectionTitle;