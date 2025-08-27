import React, { useMemo } from "react";
import { useNavigate } from "react-router";

export default function ErrorPage() {
  const navigate = useNavigate();

  // Generate stable stars once
  const stars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({
        id: i,
        size: Math.floor(Math.random() * 3) + 1, // 1..3 px
        left: Math.floor(Math.random() * 1000),  // within 1000px container width
        bottom: Math.floor(Math.random() * 618), // within 618px container height
        duration:
          (Math.random() * 4 + 0.5).toFixed(2), // 0.5..4.5s
      });
    }
    return arr;
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#482472] text-white flex items-center justify-center p-4">
      {/* keyframes for the star shimmer */}
      <style>{`
        @keyframes shining {
          0% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>

      {/* Scene */}
      <div className="relative w-[1000px] h-[618px] overflow-hidden rounded-md shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center"
           style={{ backgroundImage: "linear-gradient(#2a1f6f, #ae3082)" }}>

        {/* Stars */}
        <div className="absolute inset-0">
          {stars.map((s) => (
            <span
              key={s.id}
              className="absolute rounded-full bg-white shadow-[0_0_5px_0_rgba(255,255,255,1)]"
              style={{
                width: s.size,
                height: s.size,
                left: s.left,
                bottom: s.bottom,
                animation: `shining ${s.duration}s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>

        {/* Planets */}
        {/* Planet 1 */}
        <div className="absolute w-[90px] h-[90px] rounded-full bottom-[260px] left-[50px] border-[5px] border-[#a3358c] shadow-[0_0_30px_#a3358c]"
             style={{ backgroundColor: "#cf3684" }}>
          <span className="absolute inset-0 m-auto block w-[70px] h-[70px] rounded-full"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#fd8f5d" }} />
          <span className="absolute inset-0 m-auto block w-[60px] h-[60px] rounded-full"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#ffdf70" }} />
        </div>

        {/* Planet 2 */}
        <div className="absolute w-[90px] h-[90px] rounded-full bottom-[40px] right-[80px] border-[5px] border-[#1383df] shadow-[0_0_30px_#1383df]"
             style={{ backgroundColor: "#08abf3", transform: "scale(0.8)" }}>
          <span className="absolute inset-0 m-auto block w-[70px] h-[70px] rounded-full"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#11c1f1" }} />
          <span className="absolute inset-0 m-auto block w-[60px] h-[60px] rounded-full"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#22e5f1" }} />
        </div>

        {/* Planet 3 */}
        <div className="absolute w-[90px] h-[90px] rounded-full top-[20px] right-[30px] border-[5px] border-[#7a7afe] shadow-[0_0_30px_#7a7afe]"
             style={{ backgroundColor: "#9a82ff", transform: "scale(0.6)" }}>
          <span className="absolute inset-0 m-auto block w-[70px] h-[70px] rounded-full"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#b588ff" }} />
          <span className="absolute inset-0 m-auto block w-[60px] h-[60px] rounded-full"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#d491ff" }} />
        </div>

        {/* Title 4 [square] 4 */}
        <div className="relative z-10 flex items-center">
          <h1 className="text-[10rem] font-bold leading-none tracking-tight flex items-center">
            <span className="mx-6 align-middle">4</span>

            {/* The square with lights & shadows (simplified) */}
            <span
              className="inline-block align-middle relative -left-6"
              style={{ width: 150, height: 150, transform: "scale(1.1) rotate(45deg)" }}
            >
              {/* lights */}
              <span className="absolute shadow-[0_0_10px_#fedbae] bg-[#fedbae]"
                    style={{ width: 15, height: 135, transform: "skew(0deg,45deg)", top: 6, left: 15 }} />
              <span className="absolute shadow-[0_0_10px_#fedbae] bg-[#fedbae]"
                    style={{ width: 120, height: 15, transform: "skew(45deg)", top: 0, left: 22.5 }} />
              <span className="absolute shadow-[0_0_10px_#fedbae] bg-[#fedbae] z-[2]"
                    style={{ width: 15, height: 135, transform: "skew(0deg,45deg)", top: 7.5, right: 15 }} />
              <span className="absolute shadow-[0_0_10px_#fedbae] bg-[#fedbae]"
                    style={{ width: 120, height: 15, transform: "skew(45deg)", bottom: 0, right: 22.5 }} />

              {/* shadows */}
              <span className="absolute shadow-[0_0_10px_#ff9c61] bg-[#ff9c61]"
                    style={{ width: 15, height: 120, transform: "skew(0deg,-45deg)", bottom: 7.5, right: 0 }} />
              <span className="absolute shadow-[0_0_10px_#ff9c61] bg-[#ff9c61] z-[3]"
                    style={{ width: 120, height: 15, transform: "skew(-45deg)", top: 15, left: 22.5 }} />

              {/* stairs (rough visual) */}
              <ul className="absolute left-[11px] top-[1px] flex flex-col"
                  style={{ height: 150 }}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <li key={i}
                      className="w-[7.5px] h-[7.5px] bg-[#fedbae] shadow-[0_0_10px_#fedbae]"
                      style={{ transform: "rotate(45deg)", marginBottom: 3 }} />
                ))}
              </ul>

              <ul className="absolute left-[3px] bottom-[19px] flex"
                  style={{ width: 150 }}>
                {Array.from({ length: 11 }).map((_, i) => (
                  <li key={i}
                      className="w-[7.5px] h-[7.5px] bg-[#fedbae] shadow-[0_0_10px_#fedbae]"
                      style={{ transform: "rotate(45deg)", marginRight: 3.5 }} />
                ))}
              </ul>

              <ul className="absolute right-[34px] -bottom-[32px] flex flex-col z-10">
                {Array.from({ length: 10 }).map((_, i) => (
                  <li key={i}
                      className="w-[7.5px] h-[7.5px] bg-[#fedbae] shadow-[0_0_10px_#fedbae]"
                      style={{ transform: "rotate(45deg)", marginBottom: 3.5 }} />
                ))}
              </ul>

              <ul className="absolute left-[16px] -top-[4px] flex"
                  style={{ width: 150 }}>
                {Array.from({ length: 11 }).map((_, i) => (
                  <li key={i}
                      className="w-[7.5px] h-[7.5px] bg-[#fedbae] shadow-[0_0_10px_#fedbae]"
                      style={{ transform: "rotate(45deg)", marginRight: 3.5 }} />
                ))}
              </ul>
            </span>

            <span className="mx-6 align-middle">4</span>
          </h1>
        </div>

        {/* Message */}
        <div className="relative z-10 mt-8 text-center">
          <h2 className="text-2xl">Oops! Looks like you got lost</h2>
        </div>

        {/* Action */}
        <div className="relative z-10 mt-6">
          <button
            onClick={() => navigate('/')}
            className="px-5 py-2 cursor-pointer rounded-full border-2 border-[#ff9c61] bg-[#ff9c61] shadow-[0_0_15px_#ff9c61] text-white text-lg transition hover:bg-transparent"
          >
            Return To Home
          </button>
        </div>
      </div>
    </div>
  );
}
