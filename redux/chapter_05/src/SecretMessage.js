// import React, { useState } from 'react';

// function SecretMessage() {
//   const [showSecret, setShowSecret] = useState(false);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <button onClick={() => setShowSecret(!showSecret)}>
//         {showSecret ? 'Hide' : 'Reveal'} Secret
//       </button>

//       {showSecret && (
//         <p style={{ marginTop: '20px', fontSize: '1.5rem', color: 'purple' }}>
//           Why don’t skeletons fight each other?
//           👉Because they don’t have the guts.
//         </p>
//       )}
//     </div>
//   );
// }

// export default SecretMessage;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function SecretMessage() {
//   const [showSecret, setShowSecret] = useState(false);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '80px' }}>
//       <button
//         onClick={() => setShowSecret(!showSecret)}
//         style={{
//           padding: '12px 24px',
//           fontSize: '1.2rem',
//           borderRadius: '8px',
//           background: showSecret ? '#7e57c2' : '#673ab7',
//           color: 'white',
//           border: 'none',
//           cursor: 'pointer',
//           boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
//           transition: 'all 0.3s ease',
//         }}
//       >
//         {showSecret ? '🙈 Hide Secret' : '🕵️ Reveal Secret'}
//       </button>

//       <AnimatePresence>
//         {showSecret && (
//           <motion.p
//             key="secret"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             style={{
//               marginTop: '30px',
//               fontSize: '1.6rem',
//               color: '#9c27b0',
//               fontWeight: 'bold',
//             }}
//           >
//             💀 Why don’t skeletons fight each other?<br />
//             👉 Because they don’t have the guts.
//           </motion.p>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default SecretMessage;

import React, { useState } from 'react';
import './secret.css'

function SecretMessage() {
  const [showSecret, setShowSecret] = useState(false); //showSecret is a boolean state variable.

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button className="cool-button" onClick={() => setShowSecret(!showSecret)}>
        {showSecret ? 'Hide' : 'Reveal'} Secret  
    {/* If showSecret is true, it says "Hide Secret" If showSecret is false, it says "Reveal Secret" */}
      </button>

      {showSecret && (
        <p style={{ marginTop: '20px', fontSize: '1.5rem', color: 'purple' }}>
          Why don’t skeletons fight each other? Because they don’t have the guts. 💀🤣
        </p>
      )}
    </div>
  );
}

export default SecretMessage;


