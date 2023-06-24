.PHONY: ffmpeg check_ffmpeg install_ffmpeg

ffmpeg: check_ffmpeg

check_ffmpeg:
	@if [ -x $$(command -v ffmpeg) ]; then \
		echo "FFmpeg is already installed."; \
	else \
		$(MAKE) install_ffmpeg; \
	fi

install_ffmpeg:
	@echo "Installing FFmpeg..."
	@if [ -f /etc/os-release ]; then \
		if [ $$(grep -E -i "ID_LIKE.*debian" /etc/os-release) ]; then \
			sudo apt-get update; \
			sudo apt-get install -y ffmpeg; \
		elif [ $$(grep -E -i "ID_LIKE.*rhel" /etc/os-release) ]; then \
			sudo yum install -y epel-release; \
			sudo yum install -y ffmpeg; \
		else \
			echo "Unsupported Linux distribution. Please install FFmpeg manually."; \
		fi; \
	elif [ $$(uname -s) = "Darwin" ]; then \
		if [ -x $$(command -v brew) ]; then \
			brew install ffmpeg; \
		else \
			echo "Homebrew is not installed. Please install it to proceed."; \
		fi; \
	else \
		echo "Unsupported operating system. Please install FFmpeg manually."; \
	fi
