function Button({children}){

return(

<button

className="

px-8

py-4

rounded-xl

font-semibold

bg-gradient-to-r

from-cyan-500

to-purple-500

hover:scale-105

hover:shadow-[0_0_35px_rgba(6,182,212,.5)]

transition-all

duration-300

"

>

{children}

</button>

)

}

export default Button;