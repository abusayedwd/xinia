import { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, ChevronRight, Home, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProposalSite = () => {
  const [currentPage, setCurrentPage] = useState(-1); // Start with welcome page
  const [showHearts, setShowHearts] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
 const navigate = useNavigate()
  useEffect(() => {
    // Check if proposal was already accepted
    const accepted = sessionStorage.getItem('proposalAccepted');
    if (accepted === 'yes') {
      setIsAccepted(true);
      setCurrentPage(-2); // Show acceptance page
    }
    
    setAnimateText(true);
    setShowHearts(true);
  }, [currentPage]);

  const handleAcceptProposal = () => {
    sessionStorage.setItem('proposalAccepted', 'yes');
    sessionStorage.setItem('acceptanceDate', new Date().toLocaleDateString());
    setIsAccepted(true);
    setCurrentPage(-2); // Go to acceptance page
  };

  const goToHomePage = () => {
    setCurrentPage(-1);
  };
  const homePage = () => {
    navigate("/")
  };

  const pages = [
    {
      title: "প্রিয় জিনিয়া",
      subtitle: "My Dearest Zinia",
      content: "তুমি জানো, তোমার সাথে প্রতিটি মুহূর্ত আমার কাছে স্বর্গের মতো মনে হয়। তোমার হাসি আমার দিনকে আলোকিত করে তোলে।",
      englishContent: "You know, every moment with you feels like heaven to me. Your smile lights up my entire day.",
      bgGradient: "from-rose-300 via-pink-400 to-purple-500",
      bgPattern: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%)"
    },
    {
      title: "আমার মনের কথা",
      subtitle: "Words from My Heart",
      content: "তোমার চোখের মধ্যে আমি আমার ভবিষ্যৎ দেখি। তোমার কণ্ঠস্বর আমার হৃদয়ে সুরের মতো বাজে।",
      englishContent: "In your eyes, I see my future. Your voice resonates in my heart like a beautiful melody.",
      bgGradient: "from-purple-300 via-violet-400 to-indigo-500",
      bgPattern: "radial-gradient(circle at 75% 25%, rgba(255,255,255,0.1) 0%, transparent 50%)"
    },
    {
      title: "তুমিই আমার সব",
      subtitle: "You Are My Everything",
      content: "তোমার ভালোবাসায় আমি নতুন জীবন পেয়েছি। তুমি আমার স্বপ্ন, আমার আশা, আমার সবকিছু।",
      englishContent: "In your love, I have found new life. You are my dream, my hope, my everything.",
      bgGradient: "from-indigo-300 via-blue-400 to-cyan-500",
      bgPattern: "radial-gradient(circle at 25% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)"
    },
    {
      title: "সারাজীবনের জন্য",
      subtitle: "For the Rest of Our Lives",
      content: "আমি চাই তোমার সাথে জীবনের প্রতিটি সূর্যোদয় এবং সূর্যাস্ত দেখতে। তোমার সাথে হাঁটতে চাই জীবনের প্রতিটি পথে।",
      englishContent: "I want to watch every sunrise and sunset with you. I want to walk with you on every path of life.",
      bgGradient: "from-cyan-300 via-teal-400 to-emerald-500",
      bgPattern: "radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)"
    },
    {
      title: "আমার প্রশ্ন",
      subtitle: "My Question",
      content: "জিনিয়া, তুমি কি আমার সাথে সারাজীবনের জন্য থাকবে?",
      englishContent: "Zinia, will you stay with me for the rest of our lives?",
      bgGradient: "from-pink-400 via-rose-500 to-red-500",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)",
      isProposal: true
    }
  ];

  const FloatingHearts = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <Heart 
          key={i}
          className={`absolute text-white/30 animate-pulse ${showHearts ? 'animate-bounce' : ''}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
          size={12 + Math.random() * 20}
        />
      ))}
    </div>
  );

  const SparkleEffect = () => (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <Sparkles
          key={i}
          className="absolute text-white/40 animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random()}s`
          }}
          size={8 + Math.random() * 12}
        />
      ))}
    </div>
  );

  // Welcome Page
  if (currentPage === -1 && !isAccepted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-rose-500 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-500/20 to-rose-500/20"></div>
        <div className="absolute inset-0" style={{background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)"}}>
        </div>
        
        <FloatingHearts />
        <SparkleEffect />
        
        <div className={`max-w-3xl w-full text-center transform transition-all duration-1000 ${animateText ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            
            {/* Welcome animation */}
            <div className="mb-8">
              <div className="text-8xl mb-6 animate-bounce">💕</div>
              <div className="flex justify-center mb-6">
                {[...Array(7)].map((_, i) => (
                  <Star key={i} className="text-yellow-300 animate-pulse mx-1" fill="currentColor" size={20} />
                ))}
              </div>
            </div>

            {/* Welcome title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-pulse drop-shadow-lg">
              স্বাগতম জিনিয়া
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-8 drop-shadow-md">
              Welcome My Love
            </h2>

            {/* Welcome message */}
            <div className="space-y-6 mb-12">
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium drop-shadow-md">
                আমার প্রিয়তমা, আজ আমি তোমার জন্য একটি বিশেষ কিছু তৈরি করেছি
              </p>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed italic drop-shadow-sm">
                My dearest, today I have created something special just for you
              </p>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium drop-shadow-md">
                আমার হৃদয়ের গভীরতম অনুভূতিগুলি তোমার সাথে ভাগ করে নিতে চাই
              </p>
              <p className="text-base md:text-lg text-white/80 leading-relaxed italic drop-shadow-sm">
                I want to share the deepest feelings of my heart with you
              </p>
            </div>

            {/* Start button */}
            <button
              onClick={() => setCurrentPage(0)}
              className="px-12 py-5 bg-gradient-to-r from-white/20 to-white/30 backdrop-blur-sm text-white rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border border-white/30 animate-pulse hover:animate-none flex items-center space-x-3 mx-auto"
            >
              <span>শুরু করুন</span>
              <span>•</span>
              <span>Begin Journey</span>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Acceptance Page
  if (currentPage === -2 && isAccepted) {
    const acceptanceDate = sessionStorage.getItem('acceptanceDate');
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-emerald-500/20 to-teal-600/20"></div>
        <div className="absolute inset-0" style={{background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)"}}>
        </div>
        
        <FloatingHearts />
        <SparkleEffect />
        
        <div className={`max-w-3xl w-full text-center transform transition-all duration-1000 ${animateText ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            
            <div className="mb-8">
              <div className="text-8xl mb-6 animate-bounce">💍✨</div>
              <CheckCircle size={60} className="text-white mx-auto animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-pulse drop-shadow-lg">
              সে হ্যাঁ বলেছে!
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-8 drop-shadow-md">
              She Said Yes!
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium drop-shadow-md">
                🎉 জিনিয়া আমার প্রস্তাব গ্রহণ করেছে! 🎉
              </p>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed italic drop-shadow-sm">
                Zinia has accepted my proposal!
              </p>
              {acceptanceDate && (
                <p className="text-lg text-white/80 drop-shadow-sm">
                  Acceptance Date: {acceptanceDate}
                </p>
              )}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium drop-shadow-md">
                এখন আমরা চিরকালের জন্য একসাথে থাকব! ❤️
              </p>
              <p className="text-base md:text-lg text-white/80 leading-relaxed italic drop-shadow-sm">
                Now we will be together forever! ❤️
              </p>
            </div>

            <button
              onClick={homePage}
              className="px-8 py-4 bg-gradient-to-r from-white/20 to-white/30 backdrop-blur-sm text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border border-white/30 flex items-center space-x-2 mx-auto"
            >
              <Home size={20} />
              <span>হোম পেজে যান</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main story pages
  const currentPageData = pages[currentPage];

  return (
    <div 
      className={`min-h-screen bg-gradient-to-br ${currentPageData.bgGradient} flex items-center justify-center p-4 transition-all duration-1000 relative overflow-hidden`}
    >
      <div className="absolute inset-0" style={{background: currentPageData.bgPattern}}></div>
      <div className={`absolute inset-0 bg-gradient-to-br ${currentPageData.bgGradient} opacity-80`}></div>
      
      <FloatingHearts />
      <SparkleEffect />
      
      <div className="max-w-2xl w-full relative z-10">
        <div className={`bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 text-center transform transition-all duration-700 border border-white/20 ${animateText ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          
          {/* Header with stars */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-300 animate-pulse mx-1" fill="currentColor" size={24} />
            ))}
          </div>

          {/* Main title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-pulse drop-shadow-lg">
            {currentPageData.title}
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-white/90 mb-8 font-medium drop-shadow-md">
            {currentPageData.subtitle}
          </h2>

          {/* Content */}
          <div className="space-y-6 mb-10">
            <p className="text-lg md:text-xl text-white/95 leading-relaxed font-medium drop-shadow-md">
              {currentPageData.content}
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed italic drop-shadow-sm">
              {currentPageData.englishContent}
            </p>
          </div>

          {/* Special proposal section */}
          {currentPageData.isProposal && (
            <div className="mb-10">
              <div className="text-6xl mb-6 animate-bounce">💍</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-6 animate-pulse drop-shadow-lg">
                Will You Marry Me?
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white/90 animate-pulse drop-shadow-md">
                আমাকে বিয়ে করবে?
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-center space-x-4">
            {currentPage > 0 && (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all duration-300 transform hover:scale-105 border border-white/30"
              >
                Previous
              </button>
            )}
            
            {currentPage < pages.length - 1 ? (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center space-x-2 animate-pulse border border-white/30 hover:bg-white/30"
              >
                <span>আরও দেখুন</span>
                <ChevronRight size={20} />
              </button>
            ) : (
              <div className="space-y-4">
                <button
                  onClick={handleAcceptProposal}
                  className="px-8 py-4 bg-gradient-to-r from-green-400/80 to-emerald-500/80 backdrop-blur-sm text-white rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-bounce border border-white/30"
                >
                  Yes! হ্যাঁ! 💕
                </button>
                <br />
                <button
                  onClick={() => alert('Please think again! আবার ভাবুন! 😊')}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all duration-300 border border-white/30"
                >
                  Let me think... ভাবতে দিন...
                </button>
              </div>
            )}
          </div>

          {/* Home button for accepted proposal */}
          {isAccepted && (
            <div className="mt-6">
              <button
                onClick={goToHomePage}
                className="px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all duration-300 transform hover:scale-105 border border-white/30 flex items-center space-x-2 mx-auto"
              >
                <Home size={16} />
                <span>Home</span>
              </button>
            </div>
          )}

          {/* Progress indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {pages.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer message */}
        <div className="text-center mt-6 text-white/90 relative z-10">
          <p className="text-lg font-medium drop-shadow-md">
            Made with ❤️ for the most special person in my life
          </p>
          <p className="text-sm drop-shadow-sm">
            আমার জীবনের সবচেয়ে বিশেষ মানুষের জন্য ভালোবাসা দিয়ে তৈরি
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProposalSite;