export function Input({ children, className = '', ...props }){
    return (
        <input type="text" className={`w-full border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none ${className}`}
        {...props} />
    )
}