import React from "react";
export default function Card({
  icon,
  title,
  body,
  badge,
  metric,
  metricSub,
  variant = "default",
  onClick,
}) {
  const base =
    "relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 group overflow-hidden";

  const variants = {
    default:
      "bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5",
    accent:
      "bg-forest-50 border border-forest-200 shadow-sm hover:shadow-md hover:-translate-y-0.5",
    dark:
      "bg-forest-900 border border-forest-800 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5",
  };

  const textPrimary   = variant === "dark" ? "text-white"       : "text-gray-800";
  const textSecondary = variant === "dark" ? "text-forest-300"  : "text-gray-500";
  const iconBg        = variant === "dark" ? "bg-forest-700"    : "bg-forest-100";
  const iconColor     = variant === "dark" ? "text-forest-300"  : "text-forest-600";
  const metricColor   = variant === "dark" ? "text-forest-300"  : "text-forest-700";

  const Tag = onClick ? "button" : "div";

  return (
    <Tag
      className={`${base} ${variants[variant]} ${onClick ? "cursor-pointer text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400" : ""}`}
      onClick={onClick}
      type={onClick ? "button" : undefined}
    >
      {/* Badge */}
      {badge && (
        <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-forest-500 text-white text-[10px] font-bold uppercase tracking-widest">
          {badge}
        </span>
      )}

      {/* Icon */}
      {icon && (
        <span className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${iconBg} ${iconColor}`}>
          {icon}
        </span>
      )}

      {/* Metric */}
      {metric && (
        <div>
          <p className={`font-display text-4xl font-bold leading-none ${metricColor}`}>
            {metric}
          </p>
          {metricSub && (
            <p className={`text-xs mt-1 font-medium uppercase tracking-wide ${textSecondary}`}>
              {metricSub}
            </p>
          )}
        </div>
      )}

      {/* Text */}
      <div>
        <h3 className={`font-display text-lg font-bold leading-snug mb-1 ${textPrimary}`}>
          {title}
        </h3>
        {body && (
          <p className={`text-sm leading-relaxed ${textSecondary}`}>{body}</p>
        )}
      </div>

      {}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-forest-400/30 transition-all duration-200"
      />
    </Tag>
  );
}
