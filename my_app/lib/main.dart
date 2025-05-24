import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:animated_text_kit/animated_text_kit.dart';
import 'dart:math';

void main() {
  runApp(const SarcApp());
}

class SarcApp extends StatelessWidget {
  const SarcApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SARC Portfolios',
      theme: ThemeData(
        useMaterial3: true,
        fontFamily: GoogleFonts.poppins().fontFamily,
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color.fromARGB(255, 93, 0, 254),
        ),
      ),
      debugShowCheckedModeBanner: false,
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  final techPortfolios = const ["Design", "Marketing", "Media and PR", "Web"];
  final nonTechPortfolios = const ["ASMP", "HDA", "Operations", "Events"];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [
              Color.fromARGB(255, 187, 255, 0),
              Color.fromARGB(255, 0, 254, 0),
            ],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: SingleChildScrollView(
          child: Column(
            children: [
              const StaticNavbar(),
              const SizedBox(height: 20),
              Text(
                "PORTFOLIOS",
                style: GoogleFonts.poppins(
                  fontSize: 40,
                  fontWeight: FontWeight.bold,
                  color: const Color.fromARGB(255, 132, 0, 255),
                ),
              ),
              const SizedBox(height: 16),
              PortfolioGrid(title: "Tech Portfolios", items: techPortfolios),
              const SizedBox(height: 24),
              PortfolioGrid(
                title: "Non-Tech Portfolios",
                items: nonTechPortfolios,
              ),
              const SizedBox(height: 32),
              const AnimatedFooter(),
            ],
          ),
        ),
      ),
    );
  }
}

// --- STATIC NAVBAR (no up/down animation) ---
class StaticNavbar extends StatelessWidget {
  const StaticNavbar({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 20),
      color: const Color.fromARGB(255, 85, 0, 255),
      width: double.infinity,
      child: Center(
        child: AnimatedTextKit(
          animatedTexts: [
            TyperAnimatedText(
              'SARC',
              textStyle: GoogleFonts.orbitron(
                fontSize: 36,
                fontWeight: FontWeight.w700,
                color: Colors.white,
                letterSpacing: 3,
              ),
              speed: const Duration(milliseconds: 120),
            ),
          ],
          totalRepeatCount: 100,
          pause: const Duration(milliseconds: 800),
          displayFullTextOnTap: true,
        ),
      ),
    );
  }
}

// --- PORTFOLIO GRID ---
class PortfolioGrid extends StatelessWidget {
  final String title;
  final List<String> items;

  const PortfolioGrid({super.key, required this.title, required this.items});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          title,
          style: GoogleFonts.poppins(
            fontSize: 26,
            fontWeight: FontWeight.w600,
            color: const Color.fromARGB(255, 85, 0, 255),
          ),
        ),
        const SizedBox(height: 16),
        Wrap(
          spacing: 20,
          runSpacing: 20,
          alignment: WrapAlignment.center,
          children: items
              .asMap()
              .entries
              .map(
                (entry) => FlipPortfolioCard(
                  title: entry.value,
                  delay: Duration(milliseconds: 200 * entry.key),
                ),
              )
              .toList(),
        ),
      ],
    );
  }
}

// --- FLIP CARD ANIMATION ---
class FlipPortfolioCard extends StatefulWidget {
  final String title;
  final Duration delay;

  const FlipPortfolioCard({
    super.key,
    required this.title,
    required this.delay,
  });

  @override
  State<FlipPortfolioCard> createState() => _FlipPortfolioCardState();
}

class _FlipPortfolioCardState extends State<FlipPortfolioCard>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;
  bool isFront = true;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(milliseconds: 600),
      vsync: this,
    );
    _animation = Tween<double>(
      begin: 0,
      end: pi,
    ).animate(CurvedAnimation(parent: _controller, curve: Curves.easeInOut));
    // Optional: Add entry animation delay
    Future.delayed(widget.delay, () {
      if (mounted) setState(() {});
    });
  }

  void _toggleCard() {
    if (_controller.isAnimating) return;
    if (isFront) {
      _controller.forward();
    } else {
      _controller.reverse();
    }
    setState(() {
      isFront = !isFront;
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  // For web: flip on hover, for mobile: flip on tap
  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) {
        if (MediaQuery.of(context).size.width > 600) _toggleCard();
      },
      onExit: (_) {
        if (!isFront && MediaQuery.of(context).size.width > 600) _toggleCard();
      },
      child: GestureDetector(
        onTap: () {
          if (MediaQuery.of(context).size.width <= 600) _toggleCard();
        },
        child: AnimatedBuilder(
          animation: _animation,
          builder: (context, child) {
            // For 3D effect
            final isBack = _animation.value >= pi / 2;
            return Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()
                ..setEntry(3, 2, 0.0012)
                ..rotateY(_animation.value),
              child: isBack
                  ? Transform(
                      alignment: Alignment.center,
                      transform: Matrix4.rotationY(pi),
                      child: _buildBack(context),
                    )
                  : _buildFront(context),
            );
          },
        ),
      ),
    );
  }

  Widget _buildFront(BuildContext context) {
    return Container(
      width: 180,
      height: 120,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        color: Colors.white,
        boxShadow: [
          BoxShadow(
            color: Colors.deepPurple.shade100,
            blurRadius: 12,
            offset: const Offset(4, 4),
          ),
        ],
      ),
      alignment: Alignment.center,
      child: Text(
        widget.title,
        style: GoogleFonts.poppins(
          fontSize: 18,
          fontWeight: FontWeight.w600,
          color: Colors.deepPurple,
        ),
      ),
    );
  }

  Widget _buildBack(BuildContext context) {
    return Container(
      width: 180,
      height: 120,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        color: Colors.deepPurple,
        boxShadow: [
          BoxShadow(
            color: Colors.deepPurple.shade100,
            blurRadius: 12,
            offset: const Offset(4, 4),
          ),
        ],
      ),
      alignment: Alignment.center,
      child: Text(
        "Learn more about ${widget.title}",
        textAlign: TextAlign.center,
        style: GoogleFonts.poppins(
          fontSize: 16,
          fontWeight: FontWeight.w500,
          color: Colors.white,
        ),
      ),
    );
  }
}

// --- FOOTER with fade-in, slide-up and marquee ---
class AnimatedFooter extends StatefulWidget {
  const AnimatedFooter({super.key});

  @override
  State<AnimatedFooter> createState() => _AnimatedFooterState();
}

class _AnimatedFooterState extends State<AnimatedFooter>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<Offset> _offset;
  late Animation<double> _fade;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1000),
    );
    _offset = Tween<Offset>(
      begin: const Offset(0, 0.2),
      end: Offset.zero,
    ).animate(CurvedAnimation(parent: _controller, curve: Curves.easeOut));
    _fade = Tween<double>(begin: 0, end: 1).animate(_controller);
    _controller.forward();
  }

  @override
  Widget build(BuildContext context) {
    return FadeTransition(
      opacity: _fade,
      child: SlideTransition(
        position: _offset,
        child: Container(
          color: const Color.fromARGB(255, 85, 0, 255),
          padding: const EdgeInsets.all(20),
          width: double.infinity,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                "Contact Us",
                style: GoogleFonts.poppins(
                  color: Colors.white,
                  fontSize: 18,
                  fontWeight: FontWeight.w600,
                ),
              ),
              const SizedBox(height: 10),
              Text(
                "SARC Room, SAC, IITB",
                style: GoogleFonts.poppins(color: Colors.white),
              ),
              const SizedBox(height: 4),
              Text(
                "Arush Srivastav: +91 9005549919\nKhushi Yadav: +91 8930097733",
                style: GoogleFonts.poppins(color: Colors.cyanAccent),
              ),
              const SizedBox(height: 4),
              Text(
                "web@sarc-iitb.org",
                style: GoogleFonts.poppins(
                  color: Colors.cyanAccent,
                  decoration: TextDecoration.underline,
                ),
              ),
              const SizedBox(height: 20),
              SizedBox(
                height: 20,
                child: MarqueeText(
                  "© 2025 Student Alumni Relations Cell, IIT Bombay",
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// --- Marquee Text ---
class MarqueeText extends StatefulWidget {
  final String text;
  const MarqueeText(this.text, {super.key});

  @override
  State<MarqueeText> createState() => _MarqueeTextState();
}

class _MarqueeTextState extends State<MarqueeText>
    with SingleTickerProviderStateMixin {
  late ScrollController _scrollController;

  @override
  void initState() {
    super.initState();
    _scrollController = ScrollController();
    _scroll();
  }

  void _scroll() async {
    while (mounted) {
      await _scrollController.animateTo(
        _scrollController.position.maxScrollExtent + 60,
        duration: const Duration(seconds: 8),
        curve: Curves.linear,
      );
      _scrollController.jumpTo(0);
    }
  }

  @override
  Widget build(BuildContext context) {
    return ListView(
      scrollDirection: Axis.horizontal,
      controller: _scrollController,
      children: [
        Padding(
          padding: const EdgeInsets.only(right: 60),
          child: Text(
            widget.text,
            style: GoogleFonts.poppins(fontSize: 13, color: Colors.white54),
          ),
        ),
      ],
    );
  }
}
