export default function Card({ title, description, image, footer, className = '', children }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 shadow-soft hover:shadow-soft-lg transition-shadow duration-200 overflow-hidden ${className}`}
    >
      {image && (
        <div className="w-full h-40 overflow-hidden bg-forest-100 dark:bg-forest-800">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex flex-col flex-1 p-5">
        {title && (
          <h3 className="font-display font-semibold text-base text-forest-950 dark:text-cream mb-1.5">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-sm text-forest-600 dark:text-forest-400 flex-1">{description}</p>
        )}
        {children}
        {footer && (
          <div className="mt-4 pt-4 border-t border-forest-100 dark:border-forest-800">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
