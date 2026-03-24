export function JalpaAvatar({ size = 300 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.1)}
      viewBox="0 0 300 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Background gradient circle */}
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0891B2" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#040d12" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="skinGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#C8956C" />
          <stop offset="100%" stopColor="#A0674A" />
        </radialGradient>
        <radialGradient id="clothGrad" cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor="#0B9AB8" />
          <stop offset="100%" stopColor="#065E73" />
        </radialGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0891B2" floodOpacity="0.2" />
        </filter>
        <clipPath id="avatarClip">
          <rect width="300" height="330" rx="24" />
        </clipPath>
      </defs>

      {/* Subtle bg glow */}
      <ellipse cx="150" cy="165" rx="150" ry="165" fill="url(#bgGrad)" />

      {/* Shirt / body */}
      <path
        d="M60 330 C60 260 90 230 150 220 C210 230 240 260 240 330 Z"
        fill="url(#clothGrad)"
        opacity="0.95"
      />

      {/* Collar detail */}
      <path
        d="M150 220 L135 250 L150 245 L165 250 Z"
        fill="#065E73"
        opacity="0.8"
      />

      {/* Neck */}
      <path
        d="M137 205 C137 205 134 218 134 224 C140 228 160 228 166 224 C166 218 163 205 163 205 Z"
        fill="url(#skinGrad)"
      />

      {/* Head */}
      <ellipse
        cx="150"
        cy="155"
        rx="52"
        ry="58"
        fill="url(#skinGrad)"
        filter="url(#softShadow)"
      />

      {/* Hair — top and sides */}
      <path
        d="M98 150 C98 105 118 88 150 88 C182 88 202 105 202 150 C202 130 196 108 178 100 C163 94 137 94 122 100 C104 108 98 130 98 150 Z"
        fill="#1A0A00"
      />
      {/* Hair — side volumes */}
      <path
        d="M98 150 C96 140 96 125 102 112 C100 130 100 150 104 170 Z"
        fill="#1A0A00"
      />
      <path
        d="M202 150 C204 140 204 125 198 112 C200 130 200 150 196 170 Z"
        fill="#1A0A00"
      />
      {/* Hair — back/long */}
      <path
        d="M105 155 C98 185 100 215 108 235 C115 250 118 255 118 265 C112 250 102 225 98 200 C95 180 96 160 100 150 Z"
        fill="#1A0A00"
        opacity="0.9"
      />
      <path
        d="M195 155 C202 185 200 215 192 235 C185 250 182 255 182 265 C188 250 198 225 202 200 C205 180 204 160 200 150 Z"
        fill="#1A0A00"
        opacity="0.9"
      />

      {/* Eyebrows */}
      <path d="M124 137 C128 133 136 132 141 134" stroke="#2D1A0A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M159 134 C164 132 172 133 176 137" stroke="#2D1A0A" strokeWidth="2.5" strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="133" cy="146" rx="8" ry="7" fill="#1A0A00" />
      <ellipse cx="167" cy="146" rx="8" ry="7" fill="#1A0A00" />
      {/* Eye shine */}
      <circle cx="136" cy="143" r="2.5" fill="white" opacity="0.8" />
      <circle cx="170" cy="143" r="2.5" fill="white" opacity="0.8" />
      {/* Eye lashes (top) */}
      <path d="M125 141 C128 137 138 137 141 141" stroke="#1A0A00" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M159 141 C162 137 172 137 175 141" stroke="#1A0A00" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M148 155 C146 163 144 167 146 169 C148 171 152 171 154 169 C156 167 154 163 152 155" stroke="#A0674A" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6" />

      {/* Lips */}
      <path d="M138 182 C142 178 158 178 162 182" stroke="#8B4A3A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M136 182 C140 188 150 191 160 188 C164 186 166 184 164 182 C158 186 142 186 136 182 Z" fill="#C05A50" opacity="0.9" />
      <path d="M138 182 C142 179 158 179 162 182" fill="#D06A5A" opacity="0.7" />

      {/* Small stud earring */}
      <circle cx="98" cy="172" r="3.5" fill="#0891B2" opacity="0.9" />
      <circle cx="202" cy="172" r="3.5" fill="#0891B2" opacity="0.9" />

      {/* Bindi */}
      <circle cx="150" cy="128" r="3" fill="#0891B2" opacity="0.85" />

      {/* Cyan accent glow around head */}
      <ellipse cx="150" cy="155" rx="56" ry="62" stroke="#0891B2" strokeWidth="1" fill="none" opacity="0.15" />

      {/* Bottom fade */}
      <rect x="0" y="270" width="300" height="60" fill="url(#bgGrad)" opacity="0.5" />
    </svg>
  )
}
